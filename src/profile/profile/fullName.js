function App() {
    
  
      return(
        <div style={{ margin: '0px' }}>
        <img src="./logo192.png" alt="react logo" style={{ width: '200px', }}/>
        <h2>FullName</h2>
      </div>
      )
      
    }; 
    const Profile = (props) => {
      const { name = "Haitham"} = props;
    
      return (
        <div>
          <p>Name: {name}</p>
        </div>
      );
    };
    
    Profile.defaultProps = {
      name: "Haitham",
      
    };
    
    
    

  
  export default App;
  
  