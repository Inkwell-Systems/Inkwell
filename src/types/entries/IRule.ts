import {CheckOperatorValidity, Operator} from './IOperator.ts';
import {IEvent} from './IEvent.ts';
import {CheckModificationValidity, IModification} from './IModification.ts';
import {CheckEntryValidity, IEntry} from './IEntry.ts';

export interface ICriterion {
    comparedEntry: number;
    compareValue: number;
    comparisonOperator: Operator;
}

export const StringToOperator = (s: string): Operator | null => {
    switch (s) {
        case '==':
            return Operator.Equal;
        case '!=':
            return Operator.NotEqual;
        case '>':
            return Operator.GreaterThan;
        case '>=':
            return Operator.GreaterThanOrEqual;
        case '<':
            return Operator.LessThan;
        case '<=':
            return Operator.LessThanOrEqual;
        default:
            return null;
    }
};

export const OperatorToString = (op: Operator): string => {
    switch (op) {
        case Operator.Equal:
            return '==';
        case Operator.NotEqual:
            return '!=';
        case Operator.GreaterThan:
            return '>';
        case Operator.GreaterThanOrEqual:
            return '>=';
        case Operator.LessThan:
            return '<';
        case Operator.LessThanOrEqual:
            return '<=';
        default:
            return '';
    }
};

export const StringToCriterion = (s: string[]): ICriterion | null => {
    const op = StringToOperator(s[1]);

    const s1 = parseInt(s[0]);
    const s2 = parseInt(s[2]);

    if (!isNaN(s1) && op !== null && !isNaN(s2))
        return {
            comparedEntry: s1,
            compareValue: s2,
            comparisonOperator: op,
        };
    else return null;
};

export const CriterionToString = (c: ICriterion): string => {
    const op = OperatorToString(c.comparisonOperator);
    const s1 = c.comparedEntry;
    const s2 = c.compareValue;

    return `|${s1}, ${op}, ${s2}|`;
};

export const CheckCriterionValidity = (criterion: ICriterion): boolean => {
    const isComparedEntryValid =
        'comparedEntry' in criterion &&
        typeof criterion.comparedEntry === 'number';

    const isComparedValueValid =
        'compareValue' in criterion &&
        typeof criterion.compareValue === 'number';

    const isComparisonOperatorValid =
        'comparisonOperator' in criterion &&
        typeof criterion.comparisonOperator === 'string' &&
        CheckOperatorValidity(criterion.comparisonOperator);

    return (
        isComparedEntryValid &&
        isComparedValueValid &&
        isComparisonOperatorValid
    );
};

export interface IRule extends IEntry {
    ruleGuard: number;
    ruleTriggers: IEvent[];
    ruleCriteria: ICriterion[];
    ruleModifications: IModification[];
}

export const CreateProjectRule = (ruleId: number): IRule => ({
    key: 'New Rule',
    id: ruleId,
    value: 0,
    ruleGuard: 1,
    ruleTriggers: [],
    ruleCriteria: [],
    ruleModifications: [],
});

// TODO(calco): Check if IDs are actually valid!!!
export const CheckRuleValidity = (rule: IRule): boolean => {
    const isValidEntry = CheckEntryValidity(rule);

    const isTriggersValid =
        'ruleTriggers' in rule &&
        Array.isArray(rule.ruleTriggers) &&
        rule.ruleTriggers.every(trigger => typeof trigger === 'number');

    const isTriggeredByValid =
        'ruleTriggeredBy' in rule &&
        Array.isArray(rule.ruleTriggeredBy) &&
        rule.ruleTriggeredBy.every(trigger => typeof trigger === 'number');

    const isCriteriaValid =
        'ruleCriteria' in rule &&
        Array.isArray(rule.ruleCriteria) &&
        rule.ruleCriteria.every(criterion => CheckCriterionValidity(criterion));

    const isModificationsValid =
        'ruleModifications' in rule &&
        Array.isArray(rule.ruleModifications) &&
        rule.ruleModifications.every(modification =>
            CheckModificationValidity(modification),
        );

    return (
        isValidEntry &&
        isTriggersValid &&
        isTriggeredByValid &&
        isCriteriaValid &&
        isModificationsValid
    );
};
