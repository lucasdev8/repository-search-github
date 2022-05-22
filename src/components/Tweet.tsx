//define os tipos das propiedades do meu component

type TweetProps = {
    text: string;
};

export function Tweet(props: TweetProps) {
    return (
        <p>{props.text}</p>
    );
};