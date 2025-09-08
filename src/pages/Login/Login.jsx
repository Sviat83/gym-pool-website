import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[error, seterror] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/gym-pool-website/admin/dashboard"); // редірект після входу
        }
        catch (err){
            seterror("Невірний email або пароль");
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Вхід в адмінпанель</h2>
            <form className={styles.form} onSubmit={handleLogin}>
                <label className={styles.label}>Email</label>
                <input 
                    className={styles.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                <label className={styles.label}>Password</label>    
                <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />

                 {error && <p className={styles.error}>{error}</p>}   
                 <button className={styles.button} type="submit">Увійти</button>
            </form>
        </div>
    );
}


export default Login;