import "./navbar.css";

const index=()=>{
   return (
      <>
       <nav className="nav">
            
          <div className="nav_wrap"> 
          <ul className="nav_wrap_ul_list">
            <li className="nav_wrap_ul_list_li_item">Beranda</li>
            <li className="nav_wrap_ul_list_li_item">Koleksi</li>
            <li className="nav_wrap_ul_list_li_item">Syarat dan Ketentuan</li>
            <li className="nav_wrap_ul_list_li_item">Kontak</li>
          </ul>
            <button className="nav_wrap_button">Masuk</button>
             </div>
        </nav>
         
      </>
   )
}


export default index;