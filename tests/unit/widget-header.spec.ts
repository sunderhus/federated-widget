import WidgetHeader from "@/components/widget-header/index.vue";
import { shallowMount } from "@vue/test-utils";
import { Component, defineComponent } from "vue";

type SutParams = {
  card: {
    title?: string;
    icon?: Component;
  };
};

const makeSut = (params?: SutParams) => {
  const sut = shallowMount(WidgetHeader, {
    props: {
      card: params?.card,
    },
    global: {
      stubs: {
        IconStub: {
          template: "<img />",
        },
        PhArrowLeft: {
          template: "<svg />",
        },
      },
    },
  });

  return {
    sut,
  };
};

describe("WidgetHeader", () => {
  test("Should render", () => {
    const { sut } = makeSut();
    expect(sut.exists).toBeTruthy();
  });

  it("Should display default title", () => {
    const { sut } = makeSut();

    const title = sut.find("header").text();

    expect(title).toBe("Deixe seu feedback");
  });

  it("Should display card title on header", () => {
    const cardStub = {
      title: "stub_title",
    };
    const { sut } = makeSut({ card: cardStub });

    const title = sut.find("header").text();

    expect(title).toBe(cardStub.title);
  });

  it("Should display card icon on header", () => {
    const cardStub = {
      title: "",
      card: defineComponent({ name: "IconStub" }),
    };
    const { sut } = makeSut({ card: cardStub });

    const icon = sut.find("img");

    expect(icon).toBeTruthy();
  });
});
