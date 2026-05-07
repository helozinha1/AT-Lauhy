import Card from '../../components/Card/Card';
import styles from './Home.module.css';
import Banner from '../../components/Banner/Banner';
import Tania from '../../assets/maedoneilsondecolar.png';
import Elica from '../../assets/maedokraycolar.png';
import Elizete from '../../assets/maedodavicolar.png';

function Home() {
    const joias = [
        {
            id: 1,
            titulo: 'Etcetera’s Burmese Ruby Necklace',
            preco: 'R$ 31.954.560,00',
            imagem: Tania,
        },
        {
            id: 2,
            titulo: 'Pingente Medalha Flor de Lótus em Ouro Amarelo 18k com Topázio Incolor, 7mm',
            preco: 'R$ 10.500,00',
            imagem: Elica,
        },
        {
            id: 3,
            titulo: 'Colar Capri em Prata 925 e Ouro Amarelo 18k com Diamantes 0,4 ct',
            preco: 'R$ 36.550,00',
            imagem: Elizete,
        },
    ];

    return (
        <>
            <Banner />
            <div className={styles.homeContainer}>
                <div className={styles.carrosselFalso}>
                    <button className={styles.seta}>&lt;</button>

                    <div className={styles.cardsGrid}>
                        {joias.map((joia) => (
                            <Card
                                key={joia.id}
                                titulo={joia.titulo}
                                preco={joia.preco}
                                imagem={joia.imagem}
                            />
                        ))}
                    </div>

                    <button className={styles.seta}>&gt;</button>
                </div>
            </div>
        </>
    );
}

export default Home;
