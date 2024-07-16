import { useEffect, useState } from "react"
import { useTheme } from "styled-components"

import { LocalStorage } from "../../client"
import { Modal, Page, PageContent } from "../../components"

import { Card, Placeholder, Title, Banner } from "./components"
import { CarouselCategoryStyle, CategorySectionStyle } from "./style"



export function Home() {
  const [cards, setCards] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editCard, setEditCard] = useState(null)
  const theme = useTheme()

  const CategoryEnum = {
    FRONT_END: "FRONT_END",
    BACK_END: "BACK_END",
    MOBILE: "MOBILE"
  }

  const handleOnDelete = (id) => {
    LocalStorage.removeVideo(id)
    setCards(cards.filter(card => card.id !== id))
  }

  const handleOnEdit = (id) => {
    setEditCard(cards.find(card => card.id === id))
    setShowModal(true)
  }

  const handleEditCard = (card) => {
    LocalStorage.removeVideo(card.id)
    LocalStorage.addVideo(card)
    setCards(cards.map(c => c.id === card.id ? card : c))
    setShowModal(false)
  }

  const validateHasCardsByCategory = (category) => {
    return !!cards.length && cards.some(card => card.category === category)
  }

  useEffect(() => {
    const videos = LocalStorage.get()
    if (!videos) return
    setCards(videos)
  }, [])

  return (
    <Page>
      <Banner />
      <PageContent>
        <CategorySectionStyle>
          <Title
            bgColor={theme.colors.blueSecondary}
            text="Front End"
          />
          {!validateHasCardsByCategory(CategoryEnum.FRONT_END) && (
            <Placeholder />
          )}
          {validateHasCardsByCategory(CategoryEnum.FRONT_END) && (
            <CarouselCategoryStyle>
              {cards.filter(card => card.category === CategoryEnum.FRONT_END).map(card => (
                <Card
                  key={card.id}
                  data={card}
                  color={theme.colors.blueSecondary}
                  onDelete={handleOnDelete}
                  onEdit={handleOnEdit}
                />
              ))}
            </CarouselCategoryStyle>
          )}
        </CategorySectionStyle>
        <CategorySectionStyle>
          <Title 
            bgColor={theme.colors.green}
            text="Back End"
          />
          {!validateHasCardsByCategory(CategoryEnum.BACK_END) && (
            <Placeholder />
          )}
          {validateHasCardsByCategory(CategoryEnum.BACK_END) && (
            <CarouselCategoryStyle>
              {cards.filter(card => card.category === CategoryEnum.BACK_END).map(card => (
                <Card
                  key={card.id}
                  data={card}
                  color={theme.colors.green}
                  onDelete={handleOnDelete}
                  onEdit={handleOnEdit}
                />
              ))}
            </CarouselCategoryStyle>
          )}
        </CategorySectionStyle>
        <CategorySectionStyle>
          <Title 
            bgColor={theme.colors.yellow}
            text="Mobile"
          />
          {!validateHasCardsByCategory(CategoryEnum.MOBILE) && (
            <Placeholder />
          )}
          {validateHasCardsByCategory(CategoryEnum.MOBILE) && (
            <CarouselCategoryStyle>
              {cards.filter(card => card.category === CategoryEnum.MOBILE).map(card => (
                <Card
                  key={card.id}
                  data={card}
                  color={theme.colors.yellow}
                  onDelete={handleOnDelete}
                  onEdit={handleOnEdit}
                />
              ))}
            </CarouselCategoryStyle>
          )}
        </CategorySectionStyle>
        {showModal && (
          <Modal card={editCard} setShowModal={setShowModal} handleEditCard={handleEditCard} />
        )}
      </PageContent>
    </Page>
  )
}