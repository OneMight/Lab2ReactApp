

export default function Navmenu(){
    const links = [
        {id:'shop', href:'../Shop/shopall.html'},
        {id:'about', href: '../Read article/ReadArticle.html'},
        {id:'sustainability', href: './Questions/Questions.html'},
        {id:'checkusers', href: '../Check All Users/checkallusers.html'}
    ]
    return(
        <nav>
        {
            links.map(link =>(
            <a id={link.id} href={link.href}>
                <p i18n={link.id}>
                    {link.id}
                </p>
                <img src={mark} alt="" />
            </a> 
            ))
        }
        </nav>
               
    )
}