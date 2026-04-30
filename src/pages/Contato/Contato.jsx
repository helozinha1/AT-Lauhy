import styles from './Contato.module.css';

function Contato() {
    return (
        <div className={styles.contato}>

            <h2 className={styles.titulo}>Contato</h2>
            <form className={styles.form}>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contato;
