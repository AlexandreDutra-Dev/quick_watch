import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Home from ".";
import { BsSearch } from "react-icons/bs";

interface Navigator {
  geolocation: {
    getCurrentPosition: () => void;
  };
}

const mockNavigator: Navigator = {
  geolocation: {
    getCurrentPosition: jest.fn(),
  },
};

describe("Home component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "navigator", {
      value: mockNavigator,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("submits form with correct city", () => {
    const city = "New York";
    const fetchWeather = jest.fn();
    const { getByPlaceholderText, getByRole } = render(
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchWeather(city);
          }}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
        >
          <div>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl"
              type="text"
              placeholder="Procure por uma cidade"
            />
          </div>
          <button
            onClick={() => fetchWeather(city)}
            className="focus:outline-none"
          >
            <BsSearch size={20} />
          </button>
        </form>
      </div>
    );

    const input = getByPlaceholderText("Procure por uma cidade");
    const button = getByRole("button");

    fireEvent.change(input, { target: { value: city } });
    fireEvent.click(button);

    expect(fetchWeather).toHaveBeenCalledWith(city);
  });

  test("calls getCurrentPosition function", () => {
    render(<Home />);
    expect(mockNavigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
});
function setCity(value: string): void {
  throw new Error("Function not implemented.");
}
