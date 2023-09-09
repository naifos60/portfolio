import '../.././index.css';

function Error() {
    return(
        <div className = 'mb-20 mt-36 text-center md:mb-56'>
            <h2 className = 'text-9xl mt-16 mb-0 h-160 w-auto text-main'>404</h2>
            <p className = 'text-2xl fw-500 lh-51.34 mb-16 mt-8 text-main'>Oups! La page que vous demandez n'existe pas.</p>
            <a href='/' className= 'text-l text-main underline'>Retourner sur la page d’accueil</a>
        </div>
    )
}

export default Error