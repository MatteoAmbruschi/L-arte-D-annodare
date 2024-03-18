import Script from 'next/script'

function Cookie (){

    return (
        <div className={`mainContent ${styles.cookies}`}>
            <h1>Cookies</h1>
            <p>
                <script id="CookieDeclaration" src="https://consent.cookiebot.com/1a5e81ef-240c-49e0-8b31-85175b14464d/cd.js" type="text/javascript" async></script>
            </p>
            
                <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="1a5e81ef-240c-49e0-8b31-85175b14464d" data-blockingmode="auto" type="text/javascript"></Script>
        </div>
    )
}

export default Cookie