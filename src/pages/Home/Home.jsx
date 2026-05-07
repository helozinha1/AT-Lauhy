import Card from '../../components/Card/Card';
import styles from './Home.module.css';

function Home() {
    const cards = [
        { id: 1, title: 'Qualidade', description: 'Melhores serviços do mercado.' },
        { id: 2, title: 'Preço', description: 'Valores que cabem no seu bolso.' },
        { id: 3, title: 'Suporte', description: 'Atendimento 24 horas por dia.' },
    ];

    return (
        <div className={styles.homeContainer}>
            <div className={styles.banner}>
                <h1>Bem-vindo à Lauhy Joias!</h1>
                <p>
                    Explore nossa coleção de joias exclusivas e encontre a peça perfeita para você.
                </p>
            </div>

            <div className={styles.cardsGrid}>
                {cards.map((card) => (
                    <Card key={card.id} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
}

export default Home;
