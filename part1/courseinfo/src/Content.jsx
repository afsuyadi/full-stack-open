const Content = ({ parts }) => {
    return (
        <>
        <p>
            {parts[0].part1} {parts[0].exercises1}
        </p>
        <p>
            {parts[1].part2} {parts[1].exercises2}
        </p>
        <p>
            {parts[2].part3} {parts[2].exercises3}
        </p>
        </>
    )
}

export default Content