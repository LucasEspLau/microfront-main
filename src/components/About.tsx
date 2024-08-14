import Navbar from "./Navbar/Navbar";

export default function PageAbout(){
    return(
        <main>
                  <Navbar/>
            <h1>About</h1>
            <p>Esta es la página sobre.</p>
            <iframe 
                src="https://main.d1bow29zedap6t.amplifyapp.com/" 
                style={{ width: '100%', height: '100vh', border: 'none' }} 
                title="Microfront-3"
            />
        </main>
    )
}