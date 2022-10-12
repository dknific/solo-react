import '../styles/PoliticianList.scss';

export default function PoliticianList({ data, handleClick, showSenators }) {
    function politicianRow(politician, index) {
        return (
            <tr className="table-data-row" key={index} onClick={() => handleClick(politician)}>
                <td>{politician.name}</td>
                <td>{politician.party[0]}</td>
            </tr>
        );
    }

    return (
        <section className="politician-list">
            <h2>List / {showSenators ? ('Senators') : ('Representatives')}</h2>
            <table>
                <tbody>
                    <tr className="table-header">
                        <th className="name-cell">Name</th>
                        <th>Party</th>
                    </tr>
                    {data.map((politician, index) => politicianRow(politician, index))}
                </tbody>
            </table>
        </section>
    );
}
