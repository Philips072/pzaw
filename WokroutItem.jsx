export const WorkoutItem = (props) => {
    return(
            <tr>
                <td>{props.id}</td> 
                <td>{props.exercise}</td>
                <td>{props.calories}</td>
                <td><input type="checkbox" name="completed" checked={props.completed}/></td>
                <td><button>+10</button></td>
                <td><button>-10</button></td>
                <td><button>USUN</button></td>
            </tr>
    )
}