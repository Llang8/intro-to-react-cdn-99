
export default function Student(props) {
    return (
        <div className="card" onClick={() => props.clickHandler(props.student)}>
            <div className="card-body">
                <h2>{ props.student.name }</h2>
                <p><strong>{ props.student.jobTitle }</strong></p>
            </div>
        </div>
    )
}