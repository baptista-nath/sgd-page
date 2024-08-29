// src/components/TestimonialsSection.tsx
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <SectionContainer id="testimonials">
      <SectionTitle>O que Nossos Clientes Dizem</SectionTitle>
      <StyledSlider {...settings}>
        <TestimonialItem>
          <TestimonialText>
            "SGD Light transformou a forma como gerenciamos nosso delivery!"
          </TestimonialText>
          <TestimonialAuthor>— Ana Silva, Restaurante XYZ</TestimonialAuthor>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialText>
            "A equipe do SGD Light é muito dedicada e o sistema é extremamente
            eficaz."
          </TestimonialText>
          <TestimonialAuthor>— João Pereira, Pizzaria ABC</TestimonialAuthor>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialText>
            "O sistema é fácil de usar e nos ajudou a melhorar nosso
            atendimento."
          </TestimonialText>
          <TestimonialAuthor>
            — Maria Oliveira, Lanchonete 123
          </TestimonialAuthor>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialText>
            "Desde que começamos a usar o SGD Light, nossa eficiência aumentou."
          </TestimonialText>
          <TestimonialAuthor>— Carlos Santos, Café 456</TestimonialAuthor>
        </TestimonialItem>
      </StyledSlider>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-dots {
    bottom: -30px;
  }
`;

const TestimonialItem = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #666;
`;

const TestimonialAuthor = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default TestimonialsSection;
