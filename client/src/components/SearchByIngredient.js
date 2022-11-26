const SearchByIngredient = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const key = process.env.REACT_APP_API_KEY;
  const key1 = process.env.REACT_APP_API_KEY1;

  //const [recipes, setRecipes] = useState(null);
  // console.log(process.env.REACT_APP_API_KEY);

  const clickHandler = () => {
    let search = "";
    if (value) {
      search += value;
    }
    if (value2) {
      search += `,+${value2}`;
    }
    if (value3) {
      search += `,+${value3}`;
    }
    if (value4) {
      search += `,+${value4}`;
    }
    if (value5) {
      search += `,+${value5}`;
    }
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key1}&ingredients=${search}&number=5`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  };
  return (
    <>
      <>
        <StyledLoading>
          <SpinnerCircular />
        </StyledLoading>

        <div>
          <BgImage />
          <LeftSideBar />
          <button
            onClick={() => {
              clickHandler();
            }}
          >
            Submit
          </button>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          list ingredients
          <input
            type="text"
            value={value2}
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />
          <input
            type="text"
            value={value3}
            onChange={(e) => {
              setValue3(e.target.value);
            }}
          />
          <input
            type="text"
            value={value4}
            onChange={(e) => {
              setValue4(e.target.value);
            }}
          />
          <input
            type="text"
            value={value5}
            onChange={(e) => {
              setValue5(e.target.value);
            }}
          />
        </div>
      </>
      <div>
        <BgImage />
        <LeftSideBar />
        <button
          onClick={() => {
            clickHandler();
          }}
        >
          Submit
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        list ingredients
        <input
          type="text"
          value={value2}
          onChange={(e) => {
            setValue2(e.target.value);
          }}
        />
        <input
          type="text"
          value={value3}
          onChange={(e) => {
            setValue3(e.target.value);
          }}
        />
        <input
          type="text"
          value={value4}
          onChange={(e) => {
            setValue4(e.target.value);
          }}
        />
        <input
          type="text"
          value={value5}
          onChange={(e) => {
            setValue5(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchByIngredient;
