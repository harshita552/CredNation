import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  const onButtonContainerClick2 = useCallback(() => {
    // Please sync "Profile page" to the project
  }, []);

  return (
    <div className="w-full relative [background:linear-gradient(179.41deg,_#18181b,_#3e065f)] overflow-hidden flex flex-col items-start justify-start text-left text-base text-ripe-plum-50 font-lg-normal">
      <Header />
      <div className="w-full bg-gray-300 overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-[18px] px-8 box-border gap-2 text-center text-sm">
        <div className="rounded-components-button-global-borderradiuslg border-gray-300 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start text-left text-base text-components-button-component-defaultcolor">
          <div className="overflow-hidden flex flex-col items-start justify-start text-ripe-plum-50">
            <div className="shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] bg-gray-300 overflow-hidden flex flex-col items-center justify-center py-0 px-components-button-component-paddinginlinelg">
              <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined.svg"
                />
                <div className="relative leading-[24px]">Quick Filters</div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-gray-300 flex flex-row items-start justify-start py-px px-0">
            <div className="self-stretch w-px relative bg-gray-300" />
          </div>
          <div className="overflow-hidden hidden flex-col items-start justify-start text-ripe-plum-50">
            <div className="shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] bg-gray-300 overflow-hidden flex flex-col items-center justify-center py-0 px-components-button-component-paddinginlinelg">
              <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined.svg"
                />
                <div className="relative leading-[24px]">
                  Register as a Guard
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-components-button-global-colorborder hidden flex-row items-start justify-start py-px px-0">
            <div className="self-stretch w-px relative bg-components-button-global-colorborder" />
          </div>
          <div className="overflow-hidden hidden flex-col items-start justify-start">
            <div className="shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] bg-components-button-component-primarycolor overflow-hidden flex flex-col items-center justify-center py-0 px-components-button-component-paddinginlinelg">
              <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined.svg"
                />
                <div className="relative leading-[24px]">Button</div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-gray-300 flex flex-row items-start justify-start py-px px-0">
            <div className="self-stretch w-px relative bg-gray-300" />
          </div>
          <div className="overflow-hidden hidden flex-col items-start justify-start text-ripe-plum-50">
            <div className="shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] bg-gray-300 overflow-hidden flex flex-col items-center justify-center py-0 px-components-button-component-paddinginlinelg">
              <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined.svg"
                />
                <div className="relative leading-[24px]">Contact Us</div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-components-button-global-colorborder hidden flex-row items-start justify-start py-px px-0">
            <div className="self-stretch w-px relative bg-components-button-global-colorborder" />
          </div>
          <div className="overflow-hidden hidden flex-col items-start justify-start">
            <div className="shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] bg-components-button-component-primarycolor overflow-hidden flex flex-col items-center justify-center py-0 px-components-button-component-paddinginlinelg">
              <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined.svg"
                />
                <div className="relative leading-[24px]">Button</div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-components-button-global-colorborder hidden flex-row items-start justify-start py-px px-0">
            <div className="self-stretch w-px relative bg-components-button-global-colorborder" />
          </div>
          <div className="overflow-hidden hidden flex-col items-start justify-start">
            <div className="shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] bg-components-button-component-primarycolor overflow-hidden flex flex-col items-center justify-center py-0 px-components-button-component-paddinginlinelg">
              <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined.svg"
                />
                <div className="relative leading-[24px]">Button</div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-components-button-global-colorborder hidden flex-row items-start justify-start py-px px-0">
            <div className="self-stretch w-px relative bg-components-button-global-colorborder" />
          </div>
          <div className="overflow-hidden hidden flex-col items-start justify-start">
            <div className="shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] bg-components-button-component-primarycolor overflow-hidden flex flex-col items-center justify-center py-0 px-components-button-component-paddinginlinelg">
              <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined.svg"
                />
                <div className="relative leading-[24px]">Button</div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-components-button-global-colorborder hidden flex-row items-start justify-start py-px px-0">
            <div className="self-stretch w-px relative bg-components-button-global-colorborder" />
          </div>
          <div className="overflow-hidden hidden flex-col items-start justify-start">
            <div className="shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] bg-components-button-component-primarycolor overflow-hidden flex flex-col items-center justify-center py-0 px-components-button-component-paddinginlinelg">
              <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--searchoutlined.svg"
                />
                <div className="relative leading-[24px]">Button</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-81xl border-ripe-plum-50 border-[1px] border-solid box-border h-10 overflow-hidden flex flex-col items-center justify-center">
          <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
            <div className="relative leading-[22px]">Armed</div>
          </div>
        </div>
        <div className="rounded-81xl border-ripe-plum-50 border-[1px] border-solid box-border h-10 overflow-hidden flex flex-col items-center justify-center">
          <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
            <div className="relative leading-[22px]">Unarmed</div>
          </div>
        </div>
        <div className="rounded-81xl border-ripe-plum-50 border-[1px] border-solid box-border h-10 overflow-hidden flex flex-col items-center justify-center">
          <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
            <div className="relative leading-[22px]">Event Security</div>
          </div>
        </div>
        <div className="rounded-81xl border-ripe-plum-50 border-[1px] border-solid box-border h-10 overflow-hidden flex flex-col items-center justify-center">
          <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
            <div className="relative leading-[22px]">24x7 Available</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="self-stretch w-[355px] bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start p-8 box-border gap-8">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[24px] font-semibold">Address</div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch rounded flex flex-row items-start justify-start">
                <div className="flex-1 rounded-components-input-global-borderradiussm bg-gray-200 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-components-input-component-paddinginline gap-2.5">
                  <input
                    className="[border:none] [outline:none] font-lg-normal text-sm bg-[transparent] w-28 relative leading-[22px] text-darkgray text-left flex items-center h-5 shrink-0"
                    placeholder="Address"
                    type="text"
                  />
                  <div className="w-6 flex flex-col items-start justify-start py-[9px] px-1.5 box-border opacity-[0]">
                    <img
                      className="w-3 relative h-1.5 object-contain"
                      alt=""
                      src
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="w-[250px] relative leading-[24px] font-semibold flex items-center h-[22px] shrink-0">
              Ratings
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-sm">
              <div className="w-[250px] flex flex-col items-start justify-center">
                <div className="w-[250px] flex flex-col items-start justify-start">
                  <div className="w-[250px] flex flex-row items-center justify-center gap-1">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <div className="w-[132px] relative leading-[22px] flex items-center h-[22px] shrink-0">{`& Up`}</div>
                  </div>
                </div>
              </div>
              <div className="w-[250px] flex flex-col items-start justify-center">
                <div className="w-[250px] flex flex-col items-start justify-start">
                  <div className="w-[250px] flex flex-row items-center justify-center gap-1">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <div className="w-[132px] relative leading-[22px] flex items-center h-[22px] shrink-0">{`& Up`}</div>
                  </div>
                </div>
              </div>
              <div className="w-[250px] flex flex-col items-start justify-center">
                <div className="w-[250px] flex flex-col items-start justify-start">
                  <div className="w-[250px] flex flex-row items-center justify-center gap-1">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <div className="w-[132px] relative leading-[22px] flex items-center h-[22px] shrink-0">{`& Up`}</div>
                  </div>
                </div>
              </div>
              <div className="w-[250px] flex flex-col items-start justify-center">
                <div className="w-[250px] flex flex-col items-start justify-start">
                  <div className="w-[250px] flex flex-row items-center justify-center gap-1">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/emptystar.svg"
                    />
                    <div className="w-[132px] relative leading-[22px] flex items-center h-[22px] shrink-0">{`& Up`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 text-sm">
            <div className="w-[250px] relative text-base leading-[24px] font-semibold flex items-center h-[22px] shrink-0">
              {`Skills & Expertise`}
            </div>

            <div className="w-[250px] relative h-10 hidden text-secondary-grey">
              <div className="absolute top-[5px] left-[0px] rounded bg-components-button-component-primarycolor border-gray-100 border-[1px] border-solid box-border w-[250px] h-[30px] overflow-hidden">
                <div className="absolute top-[7px] left-[16px] flex flex-row items-start justify-start gap-2">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/search-1.svg"
                  />
                  <div className="w-[43px] relative flex items-center h-4 shrink-0">
                    Search
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-2">
              {[
                "Access Control",
                "Emergency Response",
                "Conflict Resolution",
                "Report Writing",
                "Surveillance",
                "First Aid",
                "Physical Security",
                "Customer Service",
              ].map((skill) => (
                <div className="w-[250px] relative h-4" key={skill}>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={skill}
                      className="w-4 h-4"
                      // Add your onChange logic here if needed
                    />
                    <label
                      htmlFor={skill}
                      className="leading-[22px] flex items-center w-[222px] h-4"
                    >
                      {skill}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="self-stretch relative leading-[24px] font-semibold text-white">
              Price range
            </div>
            <div className="flex w-full items-center justify-start gap-2">
              <input
                className="border-darkslategray border border-solid outline-none font-lg-normal text-sm bg-gray-200 flex-1 rounded-components-input-global-borderradiussm box-border h-[57px] py-4 px-3 text-darkgray min-w-0"
                placeholder="Min"
                type="number"
              />
              <input
                className="border-darkslategray border border-solid outline-none font-lg-normal text-sm bg-gray-200 flex-1 rounded-components-input-global-borderradiussm box-border h-[57px] py-4 px-3 text-darkgray min-w-0"
                placeholder="Max"
                type="number"
              />
            </div>
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[24px] font-semibold">
              Service Type
            </div>
            <div className="self-stretch rounded bg-ripe-plum-50 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 rounded-components-input-global-borderradiussm bg-gray-200 border-darkslategray border-[1px] border-solid box-border h-[57px] flex flex-row items-center justify-start py-0 px-components-input-component-paddinginline gap-2.5">
                  <input
                    className="[border:none] [outline:none] font-lg-normal text-sm bg-[transparent] w-28 relative leading-[22px] text-darkgray text-left flex items-center h-5 shrink-0"
                    placeholder="All Services"
                    type="text"
                  />
                  <div className="w-6 flex flex-col items-start justify-start py-[9px] px-1.5 box-border">
                    <img
                      className="w-3 relative h-1.5 object-contain"
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-0 px-components-button-component-paddinginlinelg bg-ripe-plum-950 self-stretch shadow-[0px_2px_0px_rgba(5,_145,_255,_0.1)] rounded-components-button-global-borderradiuslg h-14 flex flex-col items-center justify-center box-border">
            <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--searchoutlined1.svg"
              />
              <div className="relative text-base leading-[24px] font-lg-normal text-components-button-component-primarycolor text-left">
                Apply Filters
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-0 px-components-button-component-paddinginlinelg bg-ripe-plum-950 self-stretch shadow-[0px_2px_0px_rgba(5,_145,_255,_0.1)] rounded-components-button-global-borderradiuslg h-14 flex flex-col items-center justify-center box-border">
            <div className="h-components-button-global-controlheightlg flex flex-row items-center justify-center gap-components-button-global-marginxs">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--searchoutlined1.svg"
              />
              <div className="relative text-base leading-[24px] font-lg-normal text-components-button-component-primarycolor text-left">
                Clear Filters
              </div>
            </div>
          </button>
        </div>
        {/* Main Content */}
        <div className="hidden md:flex flex-1 flex-row items-end justify-center flex-wrap content-end p-8 text-5xl text-components-button-component-primarycolor">
          <div className="flex-1 flex flex-col items-start justify-start gap-8">
            <div className="self-stretch flex flex-row items-end justify-between flex-wrap content-end">
              <div className="w-[299px] flex flex-col items-start justify-start gap-1">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Security Guards in New York
                </div>
                <div className="self-stretch relative text-base leading-[24px]">
                  245 results found
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-8 text-center text-xs text-bunker-50">
              <div className="flex flex-wrap gap-4">
                <div className="w-80 min-h-[500px] bg-gray-300 rounded-lg overflow-hidden flex flex-col items-start justify-between p-4 box-border gap-2">
                  <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                      alt=""
                      src="/image-1-1@2x.png"
                    />
                    <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                      <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                        <img
                          className="w-4 relative h-4"
                          alt=""
                          src="/verified.svg"
                        />
                        <div className="relative text-xs leading-[20px] font-lg-normal text-ripe-plum-950 text-center">
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="w-[101px] flex flex-col items-start justify-start gap-1">
                      <div className="self-stretch relative text-xl leading-[28px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                        John Smith
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-2.5 relative h-3.5"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="relative text-sm leading-[22px] font-lg-normal text-bunker-50 text-center">
                          New York, NY
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1">
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/star.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative text-base leading-[24px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                          4.8
                        </div>
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          (213)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2">
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          Armed
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          Event Security
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          24x7 Available
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="w-[101px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-[15.5px] relative h-[15.5px]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="relative text-sm leading-[22px] font-lg-normal text-bunker-50 text-center">
                          5 years experience
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1">
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative text-xl leading-[28px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                          $35
                        </div>
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          /hour
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-ripe-plum-950 self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                      <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                        Hire Guard
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer border-ripe-plum-50 border-[1px] border-solid p-0 bg-[transparent] self-stretch rounded-lg box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <Link to="/profile" className="no-underline">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                        <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                          View Profile
                        </div>
                      </div>
                    </Link>
                  </button>
                </div>

                <div className="w-80 min-h-[500px] bg-gray-300 rounded-lg overflow-hidden flex flex-col items-start justify-between p-4 box-border gap-2">
                  <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                      alt=""
                      src="/image-1-1@2x.png"
                    />
                    <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                      <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                        <img
                          className="w-4 relative h-4"
                          alt=""
                          src="/verified.svg"
                        />
                        <div className="relative text-xs leading-[20px] font-lg-normal text-ripe-plum-950 text-center">
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="w-[101px] flex flex-col items-start justify-start gap-1">
                      <div className="self-stretch relative text-xl leading-[28px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                        Jamie Foxx
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-2.5 relative h-3.5"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="relative text-sm leading-[22px] font-lg-normal text-bunker-50 text-center">
                          New York, NY
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1">
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/star.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative text-base leading-[24px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                          4.8
                        </div>
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          (213)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2">
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          Armed
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          Event Security
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          24x7 Available
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="w-[101px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-[15.5px] relative h-[15.5px]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="relative text-sm leading-[22px] font-lg-normal text-bunker-50 text-center">
                          5 years experience
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1">
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative text-xl leading-[28px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                          $43
                        </div>
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          /hour
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-ripe-plum-950 self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                      <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                        Hire Guard
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer border-ripe-plum-50 border-[1px] border-solid p-0 bg-[transparent] self-stretch rounded-lg box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <Link to="/profile" className="no-underline">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                        <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                          View Profile
                        </div>
                      </div>
                    </Link>
                  </button>
                </div>

                <div className="w-80 min-h-[500px] bg-gray-300 rounded-lg overflow-hidden flex flex-col items-start justify-between p-4 box-border gap-2">
                  <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2 text-ripe-plum-950">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                      alt=""
                      src="/image-1-1@2x.png"
                    />
                    <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                      <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                        <img
                          className="w-4 relative h-4"
                          alt=""
                          src="/verified.svg"
                        />
                        <div className="relative leading-[20px]">Verified</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between text-xl text-ripe-plum-50">
                    <div className="w-[101px] flex flex-col items-start justify-start gap-1">
                      <div className="self-stretch relative leading-[28px] font-semibold">
                        Chad Faker
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-1 text-sm text-bunker-50">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-2.5 relative h-3.5"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="relative leading-[22px]">
                          New York, NY
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1 text-base">
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/star.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative leading-[24px] font-semibold">
                          4.8
                        </div>
                        <div className="relative text-xs leading-[20px] text-bunker-50">
                          (213)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2">
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative leading-[20px]">Armed</div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative leading-[20px]">
                          Event Security
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative leading-[20px]">
                          24x7 Available
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between text-sm">
                    <div className="w-[101px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-[15.5px] relative h-[15.5px]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="relative leading-[22px]">
                          5 years experience
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1 text-xl text-ripe-plum-50">
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative leading-[28px] font-semibold">
                          $154
                        </div>
                        <div className="relative text-xs leading-[20px] text-bunker-50">
                          /hour
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-ripe-plum-950 self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                      <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                        Hire Guard
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer border-ripe-plum-50 border-[1px] border-solid p-0 bg-[transparent] self-stretch rounded-lg box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <Link to="/profile" className="no-underline">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                        <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                          View Profile
                        </div>
                      </div>
                    </Link>
                  </button>
                </div>

                <div className="w-80 min-h-[500px] bg-gray-300 rounded-lg overflow-hidden flex flex-col items-start justify-between p-4 box-border gap-2">
                  <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                      alt=""
                      src="/image-1-1@2x.png"
                    />
                    <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                      <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                        <img
                          className="w-4 relative h-4"
                          alt=""
                          src="/verified.svg"
                        />
                        <div className="relative text-xs leading-[20px] font-lg-normal text-ripe-plum-950 text-center">
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="w-[101px] flex flex-col items-start justify-start gap-1">
                      <div className="self-stretch relative text-xl leading-[28px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                        Pat Starc
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-2.5 relative h-3.5"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="relative text-sm leading-[22px] font-lg-normal text-bunker-50 text-center">
                          New York, NY
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1">
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/star.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative text-base leading-[24px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                          4.8
                        </div>
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          (213)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2">
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          Armed
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          Event Security
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          24x7 Available
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="w-[101px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-[15.5px] relative h-[15.5px]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="relative text-sm leading-[22px] font-lg-normal text-bunker-50 text-center">
                          5 years experience
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1">
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative text-xl leading-[28px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                          $56
                        </div>
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          /hour
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-ripe-plum-950 self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                      <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                        Hire Guard
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer border-ripe-plum-50 border-[1px] border-solid p-0 bg-[transparent] self-stretch rounded-lg box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <Link to="/profile" className="no-underline">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                        <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                          View Profile
                        </div>
                      </div>
                    </Link>
                  </button>
                </div>

                <div className="w-80 min-h-[500px] bg-gray-300 rounded-lg overflow-hidden flex flex-col items-start justify-between p-4 box-border gap-2">
                  <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                      alt=""
                      src="/image-1-1@2x.png"
                    />
                    <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                      <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                        <img
                          className="w-4 relative h-4"
                          alt=""
                          src="/verified.svg"
                        />
                        <div className="relative text-xs leading-[20px] font-lg-normal text-ripe-plum-950 text-center">
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="w-[101px] flex flex-col items-start justify-start gap-1">
                      <div className="self-stretch relative text-xl leading-[28px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                        Steve Smudge
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-2.5 relative h-3.5"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="relative text-sm leading-[22px] font-lg-normal text-bunker-50 text-center">
                          New York, NY
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1">
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/star.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative text-base leading-[24px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                          4.8
                        </div>
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          (213)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2">
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          Armed
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          Event Security
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          24x7 Available
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="w-[101px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-[15.5px] relative h-[15.5px]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="relative text-sm leading-[22px] font-lg-normal text-bunker-50 text-center">
                          5 years experience
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1">
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative text-xl leading-[28px] font-semibold font-lg-normal text-ripe-plum-50 text-center">
                          $75
                        </div>
                        <div className="relative text-xs leading-[20px] font-lg-normal text-bunker-50 text-center">
                          /hour
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-ripe-plum-950 self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                      <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                        Hire Guard
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer border-ripe-plum-50 border-[1px] border-solid p-0 bg-[transparent] self-stretch rounded-lg box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <Link to="/profile" className="no-underline">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                        <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                          View Profile
                        </div>
                      </div>
                    </Link>
                  </button>
                </div>

                <div className="w-80 min-h-[500px] bg-gray-300 rounded-lg overflow-hidden flex flex-col items-start justify-between p-4 box-border gap-2">
                  <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2 text-ripe-plum-950">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                      alt=""
                      src="/image-1-1@2x.png"
                    />
                    <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                      <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                        <img
                          className="w-4 relative h-4"
                          alt=""
                          src="/verified.svg"
                        />
                        <div className="relative leading-[20px]">Verified</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between text-xl text-ripe-plum-50">
                    <div className="w-[101px] flex flex-col items-start justify-start gap-1">
                      <div className="self-stretch relative leading-[28px] font-semibold">
                        Holland Rosotto
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-1 text-sm text-bunker-50">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-2.5 relative h-3.5"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="relative leading-[22px]">
                          New York, NY
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1 text-base">
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/star.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative leading-[24px] font-semibold">
                          4.8
                        </div>
                        <div className="relative text-xs leading-[20px] text-bunker-50">
                          (213)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2">
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative leading-[20px]">Armed</div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative leading-[20px]">
                          Event Security
                        </div>
                      </div>
                    </div>
                    <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative leading-[20px]">
                          24x7 Available
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between text-sm">
                    <div className="w-[101px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-1">
                        <div className="w-4 h-4 flex flex-row items-center justify-center">
                          <img
                            className="w-[15.5px] relative h-[15.5px]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="relative leading-[22px]">
                          5 years experience
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-1 text-xl text-ripe-plum-50">
                      <div className="flex flex-row items-center justify-start gap-1">
                        <div className="relative leading-[28px] font-semibold">
                          $44
                        </div>
                        <div className="relative text-xs leading-[20px] text-bunker-50">
                          /hour
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-ripe-plum-950 self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                      <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                        Hire Guard
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer border-ripe-plum-50 border-[1px] border-solid p-0 bg-[transparent] self-stretch rounded-lg box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <Link to="/profile" className="no-underline">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                        <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                          View Profile
                        </div>
                      </div>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="w-80 rounded-lg bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start p-4 box-border gap-2">
                <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2 text-ripe-plum-950">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                    alt=""
                    src="/image-1-1@2x.png"
                  />
                  <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                    <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                      <img
                        className="w-4 relative h-4"
                        alt=""
                        src="/verified.svg"
                      />
                      <div className="relative leading-[20px]">Verified</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between text-xl text-ripe-plum-50">
                  <div className="w-[101px] flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-[28px] font-semibold">
                      Rustom Parikh
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-1 text-sm text-bunker-50">
                      <div className="w-4 h-4 flex flex-row items-center justify-center">
                        <img
                          className="w-2.5 relative h-3.5"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="relative leading-[22px]">
                        New York, NY
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1 text-base">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <div className="flex flex-row items-center justify-start gap-1">
                      <div className="relative leading-[24px] font-semibold">
                        4.8
                      </div>
                      <div className="relative text-xs leading-[20px] text-bunker-50">
                        (213)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-2">
                  <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="relative leading-[20px]">Armed</div>
                    </div>
                  </div>
                  <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="relative leading-[20px]">
                        Event Security
                      </div>
                    </div>
                  </div>
                  <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="relative leading-[20px]">
                        24x7 Available
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between text-sm">
                  <div className="w-[101px] flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start gap-1">
                      <div className="w-4 h-4 flex flex-row items-center justify-center">
                        <img
                          className="w-[15.5px] relative h-[15.5px]"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="relative leading-[22px]">
                        5 years experience
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1 text-xl text-ripe-plum-50">
                    <div className="flex flex-row items-center justify-start gap-1">
                      <div className="relative leading-[28px] font-semibold">
                        $89
                      </div>
                      <div className="relative text-xs leading-[20px] text-bunker-50">
                        /hour
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-ripe-plum-950 self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                    <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                      Hire Guard
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer border-ripe-plum-50 border-[1px] border-solid p-0 bg-[transparent] self-stretch rounded-lg box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                  <Link to="/profile" className="no-underline">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                      <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                        View Profile
                      </div>
                    </div>
                  </Link>
                </button>
              </div>
              <div className="w-80 rounded-lg bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start p-4 box-border gap-2">
                <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2 text-ripe-plum-950">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                    alt=""
                    src="/image-1-1@2x.png"
                  />
                  <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                    <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                      <img
                        className="w-4 relative h-4"
                        alt=""
                        src="/verified.svg"
                      />
                      <div className="relative leading-[20px]">Verified</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between text-xl text-ripe-plum-50">
                  <div className="w-[101px] flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-[28px] font-semibold">
                      Davey Parkinson
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-1 text-sm text-bunker-50">
                      <div className="w-4 h-4 flex flex-row items-center justify-center">
                        <img
                          className="w-2.5 relative h-3.5"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="relative leading-[22px]">
                        New York, NY
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1 text-base">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <div className="flex flex-row items-center justify-start gap-1">
                      <div className="relative leading-[24px] font-semibold">
                        4.8
                      </div>
                      <div className="relative text-xs leading-[20px] text-bunker-50">
                        (213)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-2">
                  <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="relative leading-[20px]">Armed</div>
                    </div>
                  </div>
                  <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="relative leading-[20px]">
                        Event Security
                      </div>
                    </div>
                  </div>
                  <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="relative leading-[20px]">
                        24x7 Available
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between text-sm">
                  <div className="w-[101px] flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start gap-1">
                      <div className="w-4 h-4 flex flex-row items-center justify-center">
                        <img
                          className="w-[15.5px] relative h-[15.5px]"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="relative leading-[22px]">
                        5 years experience
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1 text-xl text-ripe-plum-50">
                    <div className="flex flex-row items-center justify-start gap-1">
                      <div className="relative leading-[28px] font-semibold">
                        $45
                      </div>
                      <div className="relative text-xs leading-[20px] text-bunker-50">
                        /hour
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-ripe-plum-950 self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                    <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                      Hire Guard
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer border-ripe-plum-50 border-[1px] border-solid p-0 bg-[transparent] self-stretch rounded-lg box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                  <Link to="/profile" className="no-underline">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                      <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                        View Profile
                      </div>
                    </div>
                  </Link>
                </button>
              </div>
              <div className="w-80 rounded-lg bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start p-4 box-border gap-2">
                <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2 text-ripe-plum-950">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                    alt=""
                    src="/image-1-1@2x.png"
                  />
                  <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                    <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                      <img
                        className="w-4 relative h-4"
                        alt=""
                        src="/verified.svg"
                      />
                      <div className="relative leading-[20px]">Verified</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between text-xl text-ripe-plum-50">
                  <div className="w-[101px] flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-[28px] font-semibold">
                      Andie Anderson
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-1 text-sm text-bunker-50">
                      <div className="w-4 h-4 flex flex-row items-center justify-center">
                        <img
                          className="w-2.5 relative h-3.5"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="relative leading-[22px]">
                        New York, NY
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1 text-base">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/star.svg"
                    />
                    <div className="flex flex-row items-center justify-start gap-1">
                      <div className="relative leading-[24px] font-semibold">
                        4.8
                      </div>
                      <div className="relative text-xs leading-[20px] text-bunker-50">
                        (213)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-2">
                  <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="relative leading-[20px]">Armed</div>
                    </div>
                  </div>
                  <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="relative leading-[20px]">
                        Event Security
                      </div>
                    </div>
                  </div>
                  <div className="rounded-81xl bg-bunker-900 overflow-hidden flex flex-col items-center justify-center p-1">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                      <div className="relative leading-[20px]">
                        24x7 Available
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between text-sm">
                  <div className="w-[101px] flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start gap-1">
                      <div className="w-4 h-4 flex flex-row items-center justify-center">
                        <img
                          className="w-[15.5px] relative h-[15.5px]"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="relative leading-[22px]">
                        5 years experience
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-1 text-xl text-ripe-plum-50">
                    <div className="flex flex-row items-center justify-start gap-1">
                      <div className="relative leading-[28px] font-semibold">
                        $90
                      </div>
                      <div className="relative text-xs leading-[20px] text-bunker-50">
                        /hour
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-ripe-plum-950 self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                    <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                      Hire Guard
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer border-ripe-plum-50 border-[1px] border-solid p-0 bg-[transparent] self-stretch rounded-lg box-border h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                  <Link to="/profile" className="no-underline">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                      <div className="relative text-sm leading-[22px] font-lg-normal text-ripe-plum-50 text-center">
                        View Profile
                      </div>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
