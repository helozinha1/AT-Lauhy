import styles from './Sobre.module.css';
import { FaRocket, FaEye, FaGem } from 'react-icons/fa'; 

function Sobre() {
    return (
        <section className={styles.sobre}>
            <h1>Sobre Lauhy</h1>
            <p className={styles.descricao}>
                Somos uma loja de joias famosa que oferece uma ampla 
                variedade de joias para todos os gostos.</p>
            <div className={styles.missao}>
                <div className={styles.itens}>
                    <FaRocket />
                    <h2>Nossa Missão</h2>
                    <p>Proporcionar joias de alta qualidade que inspirem e encantem nossos clientes.</p>
            </div>
                <div className={styles.itens}>
                    <FaEye />
                    <h2>Nossa Visão</h2>
                    <p>Ser a loja de joias mais confiável e inovadora do mercado, reconhecida pela excelência em atendimento e produtos.</p>
            </div>
                <div className={styles.itens}>
                    <FaGem />
                    <h2>Nossos Valores</h2>
                    <p>Compromisso com a qualidade, atendimento excepcional, inovação constante e responsabilidade social.</p>
            </div>

            </div>
        </section>
    );
}

export default Sobre;