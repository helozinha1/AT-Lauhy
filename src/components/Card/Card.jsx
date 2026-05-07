import styles from './Card.module.css';

function Card({ titulo, preco, imagem }) {
    return (
        <div className={styles.card}>
            <div className={styles.containerImagem}>
                <img src={imagem} alt={titulo} className={styles.imagemProduto} />
            </div>
            <div className={styles.informacoes}>
                <h3 className={styles.titulo}>{titulo}</h3>
                <p className={styles.preco}>{preco}</p>
            </div>
        </div>
    );
}

export default Card;
