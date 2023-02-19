  import youtube from '../../assets/youtube.png';
  import spotify from '../../assets/spotify.png';
  import facebook from '../../assets/facebook.png';
  
  function Footer(){
return(
    <div>
   <div class="footer">The Generics</div> 
   <div class="footer-icons">
<ul>
    <li>
    <a href="https://www.youtube.com">
    <img src={youtube} alt=""/> 
     </a> 
    </li>
    <li>
    <a href="https://spotify.com">
    <img src={spotify} alt=""/>
    </a>
    </li>
    <li>
    <a href="https://facebook.com">
    <img src={facebook} alt=""/>
    </a>  
    </li>
</ul>
   </div>
    </div>
)
}
export default Footer;