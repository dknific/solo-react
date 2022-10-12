import '../styles/PoliticianList.scss';

export default function PoliticianList({ data, handleClick }) {
    function politicianRow(politician, index) {
        return (
            <tr className="table-data-row" key={index} onClick={() => handleClick(politician)}>
                <td>{politician.name}</td>
                <td>{politician.party[0]}</td>
            </tr>
        );
    }

    function renderHeaderWord() {
        let headerWord = '';

        if (!data) {
            headerWord = '';
        } else if (data[0].district === '') {
            headerWord = 'Senators';
        } else { headerWord = 'Representatives'; }

        return headerWord
    }

    return (
        <section className="politician-list">
            <h2>List / {renderHeaderWord()}</h2>
            <table>
                <tbody>
                    <tr className="table-header">
                        <th className="name-cell">Name</th>
                        <th>Party</th>
                    </tr>
                    {data && data.map((politician, index) => politicianRow(politician, index))}
                </tbody>
            </table>
        </section>
    );
}
