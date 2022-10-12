import '../styles/InfoForm.scss';

export default function InfoForm({ politician }) {
    return (
        <section className="info-form">
            <h2>Info</h2>
        {politician ? (
        <>
            <p>{politician ? (politician.name.split(' ')[0]) : 'First Name'}</p>
            <p>{politician ? (politician.name.split(' ')[1]) : 'Last Name'}</p>
            {politician && politician.district.length > 0 && (<p>District {politician.district}</p>)}
            <p>{politician ? (politician.phone) : 'Phone'}</p>
            <p>{politician ? (politician.office) : 'Office'}</p>
            <p>{politician ? (<a href={politician.link} target="_blank">Website</a>) : 'Website'}</p>
        </>
        ) : (
            <p>Click on a senator or representative from the list to see their info.</p>
        )}
        </section>
    );
}