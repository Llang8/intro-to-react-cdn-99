export default function FeaturedStudent(props) {

    function displaySkills() {
        const skillElements = [];

        for(const key in props.student.skills) {
            const val = props.student.skills[key]

            skillElements.push(<li key={key}>{key}: {val}</li>)
        }

        return skillElements
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2>{ props.student.name }</h2>
                <p><strong>{ props.student.jobTitle }</strong></p>
                <ul>
                    {displaySkills()}
                </ul>
            </div>
        </div>
    )
}