import Head from 'next/head';
import houses from '../../houses.js';
import Layout from '../../components/Layout';
import DateRangePicker from '../../components/DateRangePicker.js';

export default function House(props) {
  const { title, picture, type, town } = props.house;
  const content = (
    <div className='container'>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <img src={picture} width='100%' alt='House picture' />
        <p>
          {type} - {town}
        </p>
        <p>{title}</p>
      </article>
      <aside>
        <h2>Choose a date</h2>
        <DateRangePicker />
      </aside>

      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 60% 40%;
            grid-gap: 30px;
          }
          aside {
            border: 1px solid #ccc;
            padding: 20px;
          }
        `}
      </style>
    </div>
  );

  return <Layout content={content} />;
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  return {
    props: {
      house: houses.filter((house) => house.id === parseInt(id))[0],
    },
  };
}
