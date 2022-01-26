import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const PokemonList = ({ pokeList, itemsPerPage }) => {
    // if we had PokemonList = (props) =>
    // console.log('props', props.pokeList)

    //the difference is that we can access the array now - rather than pokelist in the object and then the array
    console.log('props again', pokeList)

    const pokemon = pokeList.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)



    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0)

    const Pokemon = () => {
        // console.log('inside items', currentItems)
        return (
            <>
                {
                    pokeList &&
                    pokeList.map((pokemon) => (
                        <div>
                            <h3>{pokemon.name}</h3>
                        </div>
                    ))
                }
            </>
        );
    }

    // arrow function has implicit return so 
    // pokeList.map((pokemon) => (
    //         <div>
    //         <h3>Item #{pokemon.name}</h3>
    //     </div>
    // ))
    //
    // is the same as using {} and return because the arrow function has implicit return


    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(pokeList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(pokeList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);



    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % pokeList.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            {/* Pokemon List
            {pokemon} */}
            <Pokemon />
            <ReactPaginate

                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />


        </div>
    )
}

export default PokemonList;