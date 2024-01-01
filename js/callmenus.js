class Navmenu extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
    `<div id="menu">
        <h1>Finance</h1>
          <nav>
              <ul>
                  <li><a href="../index.html">Inicio</a></li>
              </ul>
              <ul>
                  <li><a href="#">Minhas Finanças</a</li>
              </ul>
              <ul>
                  <li><a href="#">Historico de Transações</a></li>
              </ul>
              <ul>
                  <li><a href="Crud_Finance/pages/login.html">Login/Cadastro</a></li>
              </ul>
          </nav>
    </div>`
    }
}
class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<footer>
        <div id="footer_content">
           <ul class="footer-list">
             <li>
               <h3>Investimentos</h3>
             </li>
             <li>
               <a href="#" class="footer-link">Opções</a>
             </li>
             <li>
               <a href="#" class="footer-link">Bolsa de valores</a>
             </li>
             <li>
               <a href="#" class="footer-link">CDI</a>
             </li>
             <li>
              <a href="#" class="footer-link">Seguro Selic</a>
            </li>
           </ul>
           <ul class="footer-list">
             <li>
               <h3>Para Você</h3>
             </li>
             <li>
               <a href="#" class="footer-link">Minhas Finanças</a>
             </li>
             <li>
               <a href="#" class="footer-link">Historico de Transações</a>
             </li>
             <li>
               <a href="#" class="footer-link">Login/Cadastro</a>
             </li>
           </ul>
           <div id="footer_contacts">
            <h1 >Finance</h1>
            <p>Cuide do seu Dinheiro com a gente!</p>
            <div id="footer_social_media">
              <a href="" class="footer-link" id="instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="" class="footer-link" id="facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="" class="footer-link" id="whatsapp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
           </div>
          </div>
        </div> 
        <div id="footer_copyrith">
           &#169
           2024 all rights reserved
        </div>
       </footer>`
    }
}
customElements.define('footer-menu', Footer)
customElements.define('nav-menu', Navmenu)
