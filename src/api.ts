
type fetchFunc = (breed:string) => Promise<string[]>;

const fetchImages: fetchFunc = async (breed) => {
    const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/12`
    );
    const data = await response.json();
    return data.message;
}

export default fetchImages;