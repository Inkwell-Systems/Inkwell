import {Link} from 'react-router-dom';
import styles from './styles.module.scss';
import {HomeLandingLibrary} from '../../../assets/assets.ts';
import {
    PrimaryButton,
    SecondaryButton,
} from '../inputs/buttons/buttons.components.tsx';

const HomepageHeader = () => {
    return (
        <div className={styles.header}>
            <img src={HomeLandingLibrary} alt={'Landing image.'} />

            <div>
                <h1 style={{marginBottom: '0.25em'}}>Inkwell</h1>
                <p>
                    Shape up{' '}
                    <span style={{color: 'var(--ink-blue-main)'}}>
                        intricate stories
                    </span>{' '}
                    with a simple and
                    <br />
                    <span style={{color: 'var(--ink-turquoise-green-main)'}}>
                        flexible system
                    </span>
                    .
                </p>
            </div>

            <div className={styles.buttons}>
                <PrimaryButton filled={true} style={{marginRight: '2.5em'}}>
                    Get Started
                </PrimaryButton>
                <SecondaryButton filled={false}>Contribute</SecondaryButton>
            </div>
        </div>
    );
};

export default HomepageHeader;
