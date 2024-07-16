import { Link } from "react-router-dom";

import { SecondaryButton } from "../../../components/buttons";

import { PlaceholderStyle } from "./style";

export function Placeholder() {
  return (
    <PlaceholderStyle>
      <p>Sem vídeos para essa categoria.</p>
      <Link to={'/new-video'}>
        <SecondaryButton>Adicionar</SecondaryButton>
      </Link>
    </PlaceholderStyle>
  )
}
