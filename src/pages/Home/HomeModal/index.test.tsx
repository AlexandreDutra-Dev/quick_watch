import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AlertModal } from ".";

test("renderiza corretamente", () => {
  const { getByText } = render(<AlertModal onClose={() => {}} />);
  expect(getByText("Cidade não encontrada")).toBeInTheDocument();
});

test("fechar modal quando o botão é clicado", () => {
  const onClose = jest.fn();
  const { getByText } = render(<AlertModal onClose={onClose} />);
  const closeButton = getByText("Fechar");
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
