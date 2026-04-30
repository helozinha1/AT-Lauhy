import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
    return (
       <div className={styles.notFound}>
            <h1>404 - Página Não Encontrada</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to="/" className={styles.link}>Voltar para a Home</Link>
       </div>
    );
}

export default NotFound;