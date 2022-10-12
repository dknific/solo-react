import '../styles/PoliticianList.scss';

export default function PoliticianList({ data, showSenators }) {
    function politicianRow(politician, index) {
        return (
            <tr className="table-data-row" key={index}>
                <td className="name-cell">{politician.name}</td>
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
                        <th>Name</th>
                        <th>Party</th>
                    </tr>
                    {data.map((politician, index) => politicianRow(politician, index))}
                </tbody>
            </table>
        </section>
    );
}
