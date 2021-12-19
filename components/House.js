import Link from 'next/link';

export default function House({ id, picture, title, town, type }) {
  return (
    <Link href='/houses/[id]' as={'/houses/' + id}>
      <a>
        <img src={picture} width='100%' alt={title} />
        <p>
          {type} - {town}
        </p>
        <p>{title}</p>
      </a>
    </Link>
  );
}
