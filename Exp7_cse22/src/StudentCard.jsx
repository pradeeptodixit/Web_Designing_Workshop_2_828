// import './index.css'
// function StudentCard(props){
//     return (
//         <div>
//             <h2 style = {{ backgroundColor: "pink" }}>Name: {props.name}</h2>
//             <p>Couse: {props.course}</p>
//             <p>Marks: {props.marks}</p>
//         </div>
//     );
// }
// export default StudentCard;

import './index.css'
function StudentCard({name, course, marks}){
    return (
        <div>
            <h2 style = {{ backgroundColor: "pink" }}>Name: {name}</h2>
            <p>Couse: {course}</p>
            <p>Marks: {marks}</p>
        </div>
    );
}
export default StudentCard;