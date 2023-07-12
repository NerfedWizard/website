import React, { useState, useId } from 'react';
import quotes from '../Data/quoteData';
// import { useNavigate } from "react-router-dom";
import './../App.css';


function Quotes() {
    // const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [searched, setSearched] = useState('');
    const id = useId();
    const [noQuotes] = useState([{
        Quote: "Sorry we don't have any quotes for you",
        Author: "Many authors are waiting to inspire you,",
        Category: "Maybe start with Happy",
        Tags: ["you could also try Sad", "or Angry"],
        Popularity: 0.000000000000001,
    }]);
    const [quoteList, setQuoteList] = useState([{
        id: id,
        Quote: quotes[0].Quote,
        Author: quotes[0].Author,
        Category: quotes[0].Category,
        Tags: quotes[0].Tags,
        Popularity: quotes[0].Popularity,
    }]);
    const [flag, setFlag] = useState(false);
    const handleNext = () => {
        if (quoteList.length - index > 1) {

            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    const handleClck = () => {
        setQuoteList(quotes);
        setFlag(true);
        setIndex(Math.floor(Math.random() * quoteList.length));
    }
    const handleSearch = (e) => {
        setSearched(e.target.value);
    }
    const onSubmit = (event) => {
        setFlag(false);
        event.preventDefault();
        if (searched) {
            setIndex(0);
            if (quotes.find(e => e.Author.toLowerCase() === searched.toLowerCase())) {
                const authorSer = quotes.filter(q => q.Author.toLowerCase().split(",")[0] === searched.toLowerCase());
                if (authorSer !== undefined) {
                    setQuoteList(authorSer);
                    console.log(quoteList);
                    setFlag(true);
                }
            } else if (quotes.find(q => q.Tags.find(t => t.toLowerCase() === searched.toLowerCase()))) {
                const tagSer = quotes.filter(q => q.Tags.find(t => t.toLowerCase() === searched.toLowerCase()));
                if (tagSer !== undefined) {
                    setQuoteList(tagSer);
                    setFlag(true);
                }
            } else if (quotes.find(q => q.Category.toLowerCase() === searched.toLowerCase())) {
                const catSer = quotes.filter(q => q.Category.toLowerCase() === searched.toLowerCase());
                if (catSer !== undefined) {
                    setQuoteList(catSer);
                    setFlag(true);
                }
            } else {
                setQuoteList(noQuotes);
            }
        }

    }
    const handleTagClick = (e) => {
        setIndex(0);
        const tagSer = quotes.filter(q => q.Tags.find(t => t.toLowerCase() === e.target.innerText.toLowerCase()));
        if (tagSer !== undefined) {
            setQuoteList(tagSer);
            setFlag(true);
        }
    }
    const handleAuthorClick = (e) => {
        console.log(e.target.innerText.toLowerCase().split(",")[0]);
        const authorSer = quotes.filter(q => q.Author.toLowerCase().split(",")[0] === e.target.innerText.toLowerCase().split(",")[0]);
        if (authorSer.length > 0) {
            if (authorSer !== undefined) {
                setIndex(0);
                setQuoteList(authorSer);
                setFlag(true);
            }
        }
    }
    const handleCategoryClick = (e) => {
        setIndex(0);
        if (e.target.innerText.toLowerCase() === "Maybe start with Happy") {
            e.target.innerText = "happy";
        }
        const catSer = quotes.filter(q => q.Category.toLowerCase() === e.target.innerText.toLowerCase());
        if (catSer !== undefined) {
            setQuoteList(catSer);
            setFlag(true);
        }
    }
    //Before menu bar 
    
    // const handleHome = () => {
    //     // alert("You're about to head back to the homepage?");
    //     navigate("/");
    // }
    const backButton = () => {
        if (flag) {
            setIndex(index - 1);
            if (index <= 0) {
                setIndex(0);
            }
        }
    }
    return (
        <div class="gradient-quotes">
            <nav class="columns-quotes">
                <button class="custom-button" onClick={handleClck}>Random Quote</button>
                <input class="custom-input" type="search" onChange={handleSearch} placeholder="Author, Category or Tag">
                </input>
                <button class="custom-button" onClick={onSubmit}>Search</button>
            </nav>
            <div class="card-quotes  ">
                <nav class="columns">
                    {flag ? <button class="custom-button" onClick={backButton}>Back </button> : null
                    }
                    {flag ? <button class="custom-button" onClick={handleNext}>Next </button> : null
                    }
                </nav>
                <article>
                    <p class="setFont" key={quoteList.length - index}>Total Quotes in Set: {quoteList.length - index}</p>
                    <p key={quoteList[index].Author}>
                        <button class="custom-author-button" onClick={handleAuthorClick}>
                            {quoteList[index].Author}
                        </button>
                    </p>
                    <q class="card-quote" key={quoteList[index].Quote}>
                        {quoteList[index].Quote}
                    </q>
                    <p key={quoteList[index].Category}><button class="custom-category-button" onClick={handleCategoryClick}>
                        {quoteList[index].Category}
                    </button>
                    </p>
                    <div class="tag-grid grid-col-span-2" >
                        {quoteList[index].Tags.map(tag => (
                            <p key={tag}>
                                <button class="custom-tag-button" onClick={handleTagClick} >
                                    {tag}
                                </button>
                            </p>
                        ))}
                    </div>
                </article>
            </div>
        </div >
    );
}
export default Quotes;


