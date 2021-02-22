// Code Keypad Component Here

function Keypad(){

    function eventHandle(event){
        event.preventDefault();
        console.log('Entering Password...')
    }

    return (
        <form onSubmit={eventHandle}> 
            <label>
                Password:
            </label>
                <input type="password" name="password" placeholder="Entering Password..." /> 
        </form>            
        )


}




export default Keypad;
