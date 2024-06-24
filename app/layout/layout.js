import styles from '../Layout.module.css';
export default function Layout({children}){

    return(
        <div className="flex h-screen bg-blue-400">
            <div className="m-auto bg-slate-50 rounded-md w-3/5 h-auto grid lg:grid-cols-2">
                <div className={styles.imgStyle}>
                    <div className={styles.cartoonImg}/>
                    <div className={styles.cloud1}/>
                    <div className={styles.cloud2}/>
                </div>
                <div className="right flex flex-col justify-evenly ">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}