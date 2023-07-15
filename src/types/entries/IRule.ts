import {CheckOperatorValidity, Operator} from './IOperator.ts';
import {IEvent} from './IEvent.ts';
import {CheckModificationValidity, IModification} from './IModification.ts';
import {CheckEntryValidity, IEntry} from './IEntry.ts';

export interface ICriterion {
    comparedEntry: number;
    compareValue: number;
    comparisonOperator: Operator;
}

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
