import BoatoPrincipal from "componentes/BotaoPrincipal"
import { Link } from "react-router-dom"
import styles from "./Post.module.css"

const PostCard = ({ post }) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <BoatoPrincipal>Ler</BoatoPrincipal>
            </div>
        </Link>
    )
}

export default PostCard
