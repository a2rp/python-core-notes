// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutPython from "./components/aboutPython";
import Foundations from "./topics/foundations";
import StringsBasicDataTypes from "./topics/stringsBasicDataTypes";
import ComprehensionsIterationModel from "./topics/comprehensionsIterationModel";
import Functions from "./topics/functions";
import ErrorHandling from "./topics/errorHandling";
import ModulesAndPackages from "./topics/modulesAndPackages";
import FileHandlingIo from "./topics/fileHandlingIo";
import ObjectOrientedProgramming from "./topics/objectOrientedProgramming";
import MemoryModelMutability from "./topics/memoryModelMutability";
import FunctionalTools from "./topics/functionalTools";
import GeneratorsAdvancedIteration from "./topics/generatorsAdvancedIteration";
import AsyncBasics from "./topics/asyncBasics";
import StandardLibraryEssentials from "./topics/standardLibraryEssentials";
import TestingBestPractices from "./topics/testingBestPractices";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutPython />

                    <Foundations />
                    <StringsBasicDataTypes />
                    <ComprehensionsIterationModel />
                    <Functions />
                    <ErrorHandling />
                    <ModulesAndPackages />
                    <FileHandlingIo />
                    <ObjectOrientedProgramming />
                    <MemoryModelMutability />
                    <FunctionalTools />
                    <GeneratorsAdvancedIteration />
                    <AsyncBasics />
                    <StandardLibraryEssentials />
                    <TestingBestPractices />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
