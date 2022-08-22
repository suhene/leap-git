import { UseMovieContext } from "../context/movieContext"

export const Form = () =>{
    const {getChosen} = UseMovieContext();
    return(
        <div style={{display:'flex',paddingTop:'5rem',justifyContent:'space-between'}}>
            <div>
                <img src={getChosen.image} alt="" style={{width:'700px',height:'700px',borderRadius:'25px'}}/>
            </div>
            
            <div style={{display:'flex',flexDirection:'column'}}>
                <h4>Order Phase</h4>
                <form>
                    <div>
                        <label htmlFor="">Username</label>
                        <input/>
                    </div>
                    <div>
                        <label htmlFor="">Phone number</label>
                        <input type={"number"}/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type={"email"}/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                       
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <div>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}