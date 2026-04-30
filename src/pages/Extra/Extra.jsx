import styles from './Extra.module.css';
import { foto1, foto2 } from '../../assets';

function Extra() {
    return (
        <section className={styles.equipe}>
            <h1>Nossa Equipe</h1>
            <div className={styles.membros}>
                <div className={styles.membro}>
                    <div className={styles.fotoPlaceholder}><img className={styles.foto} src={foto2} alt="Helloysa Rocha" /></div>
                    <h2>Helloysa Rocha</h2>
                    </div>
                <div className={styles.membro}>
                    <div className={styles.fotoPlaceholder}><img className={styles.foto} src={foto1} alt="Laura Sales" /></div>
                    <h2>Laura Sales</h2>
                    </div>
                    </div>
        </section>
    );
}

export default Extra;
