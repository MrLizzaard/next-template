import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// interface GlobalStyleProps {};

// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
${reset};

body {
  margin: 0;
};

a {
  color: inherit;
  text-decoration: none;
};

a:visited {
  color: #000000;
}

p {
  margin: 0;
};

ul {
  margin-top: 0;
  margin-bottom: 0;
};

li {
  list-style: none;
};

fieldset {
  border: none;
};

input {
  border: 1px solid #dddddd;
  border-radius: 4px;
  height: 26px;
  width: 180px;
};

textarea {
  border: 1px solid #dddddd;
  border-radius: 4px;
};
`;

export default GlobalStyle;
