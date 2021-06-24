import './App.css';
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Contact/>
      <br/><br/><br/><br/><br/>
      <div style={{borderRadius:'20px',textAlign:'center',width:'500px',height:'540px',fontFamily:'Cantarell',fontSize:'20px',backgroundColor:'lightblue',marginLeft:'430px'}}>
        <img className='pic' src={'https://scontent.fgza4-2.fna.fbcdn.net/v/t1.6435-9/130679736_1846695115505557_6612660650547726926_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZfWXl3vhXeMAX8N7Gb3&_nc_ht=scontent.fgza4-2.fna&oh=983a3ba1a5ae18e2dca1c2ba847d5f45&oe=60D94A37'}/>
        <h1 style={{color:'blue',fontFamily:'cursive'}}> Abd Al-Rahman Salah Al-Lahham</h1>
        <div>
          <span className='q'>From:</span> <span className='a'>Khan Younis</span><br/>
          <span className='q' >Age:</span> <span className='a'>17</span> <br/>
          <span className='q'>Favorite Movie :</span> <a target='block' href='https://www.imdb.com/title/tt0816692/' className='a'>Interstellar</a><br/>
          <span className='q' >Favorite Anime:</span> <a className='a' target='block' href='https://www.imdb.com/title/tt2560140/'>Attack on titan</a> <br/>
          <span className='q' >Favorite Team:</span> <a className='a' target='block' href='https://www.fcbarcelona.com/en/'> FC Barcelona</a> <br/>
        </div>
        </div>
    </div>
  );
}

export default App;
