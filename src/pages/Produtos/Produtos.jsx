import styles from './Produto.module.css';
import { pulseira1, pulseira2, colar1, colar2, anel1, anel2 } from '../../assets';
import { FaHeart, FaCartPlus } from 'react-icons/fa';


function Produtos() {
    const joias = [
        { id: 1, nome: 'Pulseira de Ouro', precoDe: 'R$ 25.000,00', preco: 'R$ 20.000,00', imagem: pulseira1 },
        { id: 2, nome: 'Pulseira de Diamante', precoDe: 'R$ 35.000,00', preco: 'R$ 30.000,00', imagem: pulseira2 },
        { id: 3, nome: 'Colar de Ouro', precoDe: 'R$ 75.000,00', preco: 'R$ 40.000,00', imagem: colar1 },
        { id: 4, nome: 'Colar de Diamante', precoDe: 'R$ 65.000,00', preco: 'R$ 55.000,00', imagem: colar2 },
        { id: 5, nome: 'Anel de Ouro', precoDe: 'R$ 60.000,00', preco: 'R$ 50.000,00', imagem: anel1 },
        { id: 6, nome: 'Anel de Diamante', precoDe: 'R$ 70.000,00', preco: 'R$ 60.000,00', imagem: anel2 },
    ];

    return (
        <div className={styles.produtos}>
            <h1 className={styles.titulo}>Nossos Produtos</h1>
            <div className={styles.lista}>
                {joias.map(joia => (
                    <div key={joia.id} className={styles.item}>
                        <img className={styles.imagem} src={joia.imagem} alt={joia.nome} />
                        <h2 className={styles.nome}>{joia.nome}</h2>
                        {joia.precoDe && (
                            <p className={styles.precoDe}>De: {joia.precoDe}</p>
                        )}
                        <p className={styles.preco}>Por: {joia.preco}</p>
                        <p className={styles.parcelar}>Ou 12x de {(parseFloat(joia.preco.replace('R$ ', '').replace('.', '')) / 12).toFixed(2).replace('.', ',')}</p>
                        <div className={styles.botoes}>
                            <button className={styles.comprarButton}>Comprar</button>
                            <button className={styles.favoritarButton}><FaHeart /></button>
                            <button className={styles.carrinhoButton}><FaCartPlus /></button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Produtos;
