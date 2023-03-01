import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SendFileService } from 'src/app/services/send-file.service';
import { TableComponent } from '../table/table.component';

interface Action {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  fileId!:number;
  finalData=[
    {
      "PassengerId": 1,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Braund, Mr. Owen Harris",
      "Sex": "male",
      "Age": 22,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "A/5 21171",
      "Fare": 7.25,
      "Cabin": "C85",
      "Embarked": "S"
    },
    {
      "PassengerId": 2,
      "Survived": 1,
      "Pclass": 1,
      "Name": "Cumings, Mrs. John Bradley (Florence Briggs Thayer)",
      "Sex": "female",
      "Age": 38,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "PC 17599",
      "Fare": 71.2833,
      "Cabin": "C85",
      "Embarked": "C"
    },
    {
      "PassengerId": 3,
      "Survived": 1,
      "Pclass": 3,
      "Name": "Heikkinen, Miss. Laina",
      "Sex": "female",
      "Age": 26,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "STON/O2. 3101282",
      "Fare": 7.925,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 4,
      "Survived": 1,
      "Pclass": 1,
      "Name": "Futrelle, Mrs. Jacques Heath (Lily May Peel)",
      "Sex": "female",
      "Age": 35,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "113803",
      "Fare": 53.1,
      "Cabin": "C123",
      "Embarked": "S"
    },
    {
      "PassengerId": 5,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Allen, Mr. William Henry",
      "Sex": "male",
      "Age": 35,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "373450",
      "Fare": 8.05,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 6,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Moran, Mr. James",
      "Sex": "male",
      "Age": "null",
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "330877",
      "Fare": 8.4583,
      "Cabin": "null",
      "Embarked": "Q"
    },
    {
      "PassengerId": 7,
      "Survived": 0,
      "Pclass": 1,
      "Name": "McCarthy, Mr. Timothy J",
      "Sex": "male",
      "Age": 54,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "17463",
      "Fare": 51.8625,
      "Cabin": "E46",
      "Embarked": "S"
    },
    {
      "PassengerId": 8,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Palsson, Master. Gosta Leonard",
      "Sex": "male",
      "Age": 2,
      "SibSp": 3,
      "Parch": 1,
      "Ticket": "349909",
      "Fare": 21.075,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 9,
      "Survived": 1,
      "Pclass": 3,
      "Name": "Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)",
      "Sex": "female",
      "Age": 27,
      "SibSp": 0,
      "Parch": 2,
      "Ticket": "347742",
      "Fare": 11.1333,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 10,
      "Survived": 1,
      "Pclass": 2,
      "Name": "Nasser, Mrs. Nicholas (Adele Achem)",
      "Sex": "female",
      "Age": 14,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "237736",
      "Fare": 30.0708,
      "Cabin": "null",
      "Embarked": "C"
    },
    {
      "PassengerId": 11,
      "Survived": 1,
      "Pclass": 3,
      "Name": "Sandstrom, Miss. Marguerite Rut",
      "Sex": "female",
      "Age": 4,
      "SibSp": 1,
      "Parch": 1,
      "Ticket": "PP 9549",
      "Fare": 16.7,
      "Cabin": "G6",
      "Embarked": "S"
    },
    {
      "PassengerId": 12,
      "Survived": 1,
      "Pclass": 1,
      "Name": "Bonnell, Miss. Elizabeth",
      "Sex": "female",
      "Age": 58,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "113783",
      "Fare": 26.55,
      "Cabin": "C103",
      "Embarked": "S"
    },
    {
      "PassengerId": 13,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Saundercock, Mr. William Henry",
      "Sex": "male",
      "Age": 20,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "A/5. 2151",
      "Fare": 8.05,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 14,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Andersson, Mr. Anders Johan",
      "Sex": "male",
      "Age": 39,
      "SibSp": 1,
      "Parch": 5,
      "Ticket": "347082",
      "Fare": 31.275,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 15,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Vestrom, Miss. Hulda Amanda Adolfina",
      "Sex": "female",
      "Age": 14,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "350406",
      "Fare": 7.8542,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 16,
      "Survived": 1,
      "Pclass": 2,
      "Name": "Hewlett, Mrs. (Mary D Kingcome) ",
      "Sex": "female",
      "Age": 55,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "248706",
      "Fare": 16,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 17,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Rice, Master. Eugene",
      "Sex": "male",
      "Age": 2,
      "SibSp": 4,
      "Parch": 1,
      "Ticket": "382652",
      "Fare": 29.125,
      "Cabin": "null",
      "Embarked": "Q"
    },
    {
      "PassengerId": 18,
      "Survived": 1,
      "Pclass": 2,
      "Name": "Williams, Mr. Charles Eugene",
      "Sex": "male",
      "Age": "null",
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "244373",
      "Fare": 13,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 19,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Vander Planke, Mrs. Julius (Emelia Maria Vandemoortele)",
      "Sex": "female",
      "Age": 31,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "345763",
      "Fare": 18,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 20,
      "Survived": 1,
      "Pclass": 3,
      "Name": "Masselmani, Mrs. Fatima",
      "Sex": "female",
      "Age": "null",
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "2649",
      "Fare": 7.225,
      "Cabin": "null",
      "Embarked": "C"
    },
    {
      "PassengerId": 21,
      "Survived": 0,
      "Pclass": 2,
      "Name": "Fynney, Mr. Joseph J",
      "Sex": "male",
      "Age": 35,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "239865",
      "Fare": 26,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 22,
      "Survived": 1,
      "Pclass": 2,
      "Name": "Beesley, Mr. Lawrence",
      "Sex": "male",
      "Age": 34,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "248698",
      "Fare": 13,
      "Cabin": "D56",
      "Embarked": "S"
    },
    {
      "PassengerId": 23,
      "Survived": 1,
      "Pclass": 3,
      "Name": "McGowan, Miss. Anna \"Annie\"",
      "Sex": "female",
      "Age": 15,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "330923",
      "Fare": 8.0292,
      "Cabin": "null",
      "Embarked": "Q"
    },
    {
      "PassengerId": 24,
      "Survived": 1,
      "Pclass": 1,
      "Name": "Sloper, Mr. William Thompson",
      "Sex": "male",
      "Age": 28,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "113788",
      "Fare": 35.5,
      "Cabin": "A6",
      "Embarked": "S"
    },
    {
      "PassengerId": 25,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Palsson, Miss. Torborg Danira",
      "Sex": "female",
      "Age": 8,
      "SibSp": 3,
      "Parch": 1,
      "Ticket": "349909",
      "Fare": 21.075,
      "Cabin": "null",
      "Embarked": "S"
    }
  ];

  dataSource = [
    {
      "PassengerId": 1,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Braund, Mr. Owen Harris",
      "Sex": "male",
      "Age": 22,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "A/5 21171",
      "Fare": 7.25,
      "Cabin": "C85",
      "Embarked": "S"
    },
    {
      "PassengerId": 2,
      "Survived": 1,
      "Pclass": 1,
      "Name": "Cumings, Mrs. John Bradley (Florence Briggs Thayer)",
      "Sex": "female",
      "Age": 38,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "PC 17599",
      "Fare": 71.2833,
      "Cabin": "C85",
      "Embarked": "C"
    },
    {
      "PassengerId": 3,
      "Survived": 1,
      "Pclass": 3,
      "Name": "Heikkinen, Miss. Laina",
      "Sex": "female",
      "Age": 26,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "STON/O2. 3101282",
      "Fare": 7.925,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 4,
      "Survived": 1,
      "Pclass": 1,
      "Name": "Futrelle, Mrs. Jacques Heath (Lily May Peel)",
      "Sex": "female",
      "Age": 35,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "113803",
      "Fare": 53.1,
      "Cabin": "C123",
      "Embarked": "S"
    },
    {
      "PassengerId": 5,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Allen, Mr. William Henry",
      "Sex": "male",
      "Age": 35,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "373450",
      "Fare": 8.05,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 6,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Moran, Mr. James",
      "Sex": "male",
      "Age": "null",
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "330877",
      "Fare": 8.4583,
      "Cabin": "null",
      "Embarked": "Q"
    },
    {
      "PassengerId": 7,
      "Survived": 0,
      "Pclass": 1,
      "Name": "McCarthy, Mr. Timothy J",
      "Sex": "male",
      "Age": 54,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "17463",
      "Fare": 51.8625,
      "Cabin": "E46",
      "Embarked": "S"
    },
    {
      "PassengerId": 8,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Palsson, Master. Gosta Leonard",
      "Sex": "male",
      "Age": 2,
      "SibSp": 3,
      "Parch": 1,
      "Ticket": "349909",
      "Fare": 21.075,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 9,
      "Survived": 1,
      "Pclass": 3,
      "Name": "Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)",
      "Sex": "female",
      "Age": 27,
      "SibSp": 0,
      "Parch": 2,
      "Ticket": "347742",
      "Fare": 11.1333,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 10,
      "Survived": 1,
      "Pclass": 2,
      "Name": "Nasser, Mrs. Nicholas (Adele Achem)",
      "Sex": "female",
      "Age": 14,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "237736",
      "Fare": 30.0708,
      "Cabin": "null",
      "Embarked": "C"
    },
    {
      "PassengerId": 11,
      "Survived": 1,
      "Pclass": 3,
      "Name": "Sandstrom, Miss. Marguerite Rut",
      "Sex": "female",
      "Age": 4,
      "SibSp": 1,
      "Parch": 1,
      "Ticket": "PP 9549",
      "Fare": 16.7,
      "Cabin": "G6",
      "Embarked": "S"
    },
    {
      "PassengerId": 12,
      "Survived": 1,
      "Pclass": 1,
      "Name": "Bonnell, Miss. Elizabeth",
      "Sex": "female",
      "Age": 58,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "113783",
      "Fare": 26.55,
      "Cabin": "C103",
      "Embarked": "S"
    },
    {
      "PassengerId": 13,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Saundercock, Mr. William Henry",
      "Sex": "male",
      "Age": 20,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "A/5. 2151",
      "Fare": 8.05,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 14,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Andersson, Mr. Anders Johan",
      "Sex": "male",
      "Age": 39,
      "SibSp": 1,
      "Parch": 5,
      "Ticket": "347082",
      "Fare": 31.275,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 15,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Vestrom, Miss. Hulda Amanda Adolfina",
      "Sex": "female",
      "Age": 14,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "350406",
      "Fare": 7.8542,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 16,
      "Survived": 1,
      "Pclass": 2,
      "Name": "Hewlett, Mrs. (Mary D Kingcome) ",
      "Sex": "female",
      "Age": 55,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "248706",
      "Fare": 16,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 17,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Rice, Master. Eugene",
      "Sex": "male",
      "Age": 2,
      "SibSp": 4,
      "Parch": 1,
      "Ticket": "382652",
      "Fare": 29.125,
      "Cabin": "null",
      "Embarked": "Q"
    },
    {
      "PassengerId": 18,
      "Survived": 1,
      "Pclass": 2,
      "Name": "Williams, Mr. Charles Eugene",
      "Sex": "male",
      "Age": "null",
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "244373",
      "Fare": 13,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 19,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Vander Planke, Mrs. Julius (Emelia Maria Vandemoortele)",
      "Sex": "female",
      "Age": 31,
      "SibSp": 1,
      "Parch": 0,
      "Ticket": "345763",
      "Fare": 18,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 20,
      "Survived": 1,
      "Pclass": 3,
      "Name": "Masselmani, Mrs. Fatima",
      "Sex": "female",
      "Age": "null",
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "2649",
      "Fare": 7.225,
      "Cabin": "null",
      "Embarked": "C"
    },
    {
      "PassengerId": 21,
      "Survived": 0,
      "Pclass": 2,
      "Name": "Fynney, Mr. Joseph J",
      "Sex": "male",
      "Age": 35,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "239865",
      "Fare": 26,
      "Cabin": "null",
      "Embarked": "S"
    },
    {
      "PassengerId": 22,
      "Survived": 1,
      "Pclass": 2,
      "Name": "Beesley, Mr. Lawrence",
      "Sex": "male",
      "Age": 34,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "248698",
      "Fare": 13,
      "Cabin": "D56",
      "Embarked": "S"
    },
    {
      "PassengerId": 23,
      "Survived": 1,
      "Pclass": 3,
      "Name": "McGowan, Miss. Anna \"Annie\"",
      "Sex": "female",
      "Age": 15,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "330923",
      "Fare": 8.0292,
      "Cabin": "null",
      "Embarked": "Q"
    },
    {
      "PassengerId": 24,
      "Survived": 1,
      "Pclass": 1,
      "Name": "Sloper, Mr. William Thompson",
      "Sex": "male",
      "Age": 28,
      "SibSp": 0,
      "Parch": 0,
      "Ticket": "113788",
      "Fare": 35.5,
      "Cabin": "A6",
      "Embarked": "S"
    },
    {
      "PassengerId": 25,
      "Survived": 0,
      "Pclass": 3,
      "Name": "Palsson, Miss. Torborg Danira",
      "Sex": "female",
      "Age": 8,
      "SibSp": 3,
      "Parch": 1,
      "Ticket": "349909",
      "Fare": 21.075,
      "Cabin": "null",
      "Embarked": "S"
    }
  ];
  // headers!:string[];
  // totalRows!:number;

  totalRows = 891;

  headers= [
    "PassengerId",
    "Survived",
    "Pclass",
    "Name",
    "Sex",
    "Age",
    "SibSp",
    "Parch",
    "Ticket",
    "Fare",
    "Cabin",
    "Embarked"
  ];

  // dataSource =  [
  //   {
  //     "PassengerId": 1,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Braund, Mr. Owen Harris",
  //     "Sex": "male",
  //     "Age": 22,
  //     "SibSp": 1,
  //     "Parch": 0,
  //     "Ticket": "A/5 21171",
  //     "Fare": 7.25,
  //     "Cabin": "C85",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 2,
  //     "Survived": 1,
  //     "Pclass": 1,
  //     "Name": "Cumings, Mrs. John Bradley (Florence Briggs Thayer)",
  //     "Sex": "female",
  //     "Age": 38,
  //     "SibSp": 1,
  //     "Parch": 0,
  //     "Ticket": "PC 17599",
  //     "Fare": 71.2833,
  //     "Cabin": "C85",
  //     "Embarked": "C"
  //   },
  //   {
  //     "PassengerId": 3,
  //     "Survived": 1,
  //     "Pclass": 3,
  //     "Name": "Heikkinen, Miss. Laina",
  //     "Sex": "female",
  //     "Age": 26,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "STON/O2. 3101282",
  //     "Fare": 7.925,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 4,
  //     "Survived": 1,
  //     "Pclass": 1,
  //     "Name": "Futrelle, Mrs. Jacques Heath (Lily May Peel)",
  //     "Sex": "female",
  //     "Age": 35,
  //     "SibSp": 1,
  //     "Parch": 0,
  //     "Ticket": "113803",
  //     "Fare": 53.1,
  //     "Cabin": "C123",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 5,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Allen, Mr. William Henry",
  //     "Sex": "male",
  //     "Age": 35,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "373450",
  //     "Fare": 8.05,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 6,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Moran, Mr. James",
  //     "Sex": "male",
  //     "Age": "null",
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "330877",
  //     "Fare": 8.4583,
  //     "Cabin": "null",
  //     "Embarked": "Q"
  //   },
  //   {
  //     "PassengerId": 7,
  //     "Survived": 0,
  //     "Pclass": 1,
  //     "Name": "McCarthy, Mr. Timothy J",
  //     "Sex": "male",
  //     "Age": 54,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "17463",
  //     "Fare": 51.8625,
  //     "Cabin": "E46",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 8,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Palsson, Master. Gosta Leonard",
  //     "Sex": "male",
  //     "Age": 2,
  //     "SibSp": 3,
  //     "Parch": 1,
  //     "Ticket": "349909",
  //     "Fare": 21.075,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 9,
  //     "Survived": 1,
  //     "Pclass": 3,
  //     "Name": "Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)",
  //     "Sex": "female",
  //     "Age": 27,
  //     "SibSp": 0,
  //     "Parch": 2,
  //     "Ticket": "347742",
  //     "Fare": 11.1333,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 10,
  //     "Survived": 1,
  //     "Pclass": 2,
  //     "Name": "Nasser, Mrs. Nicholas (Adele Achem)",
  //     "Sex": "female",
  //     "Age": 14,
  //     "SibSp": 1,
  //     "Parch": 0,
  //     "Ticket": "237736",
  //     "Fare": 30.0708,
  //     "Cabin": "null",
  //     "Embarked": "C"
  //   },
  //   {
  //     "PassengerId": 11,
  //     "Survived": 1,
  //     "Pclass": 3,
  //     "Name": "Sandstrom, Miss. Marguerite Rut",
  //     "Sex": "female",
  //     "Age": 4,
  //     "SibSp": 1,
  //     "Parch": 1,
  //     "Ticket": "PP 9549",
  //     "Fare": 16.7,
  //     "Cabin": "G6",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 12,
  //     "Survived": 1,
  //     "Pclass": 1,
  //     "Name": "Bonnell, Miss. Elizabeth",
  //     "Sex": "female",
  //     "Age": 58,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "113783",
  //     "Fare": 26.55,
  //     "Cabin": "C103",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 13,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Saundercock, Mr. William Henry",
  //     "Sex": "male",
  //     "Age": 20,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "A/5. 2151",
  //     "Fare": 8.05,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 14,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Andersson, Mr. Anders Johan",
  //     "Sex": "male",
  //     "Age": 39,
  //     "SibSp": 1,
  //     "Parch": 5,
  //     "Ticket": "347082",
  //     "Fare": 31.275,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 15,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Vestrom, Miss. Hulda Amanda Adolfina",
  //     "Sex": "female",
  //     "Age": 14,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "350406",
  //     "Fare": 7.8542,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 16,
  //     "Survived": 1,
  //     "Pclass": 2,
  //     "Name": "Hewlett, Mrs. (Mary D Kingcome) ",
  //     "Sex": "female",
  //     "Age": 55,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "248706",
  //     "Fare": 16,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 17,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Rice, Master. Eugene",
  //     "Sex": "male",
  //     "Age": 2,
  //     "SibSp": 4,
  //     "Parch": 1,
  //     "Ticket": "382652",
  //     "Fare": 29.125,
  //     "Cabin": "null",
  //     "Embarked": "Q"
  //   },
  //   {
  //     "PassengerId": 18,
  //     "Survived": 1,
  //     "Pclass": 2,
  //     "Name": "Williams, Mr. Charles Eugene",
  //     "Sex": "male",
  //     "Age": "null",
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "244373",
  //     "Fare": 13,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 19,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Vander Planke, Mrs. Julius (Emelia Maria Vandemoortele)",
  //     "Sex": "female",
  //     "Age": 31,
  //     "SibSp": 1,
  //     "Parch": 0,
  //     "Ticket": "345763",
  //     "Fare": 18,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 20,
  //     "Survived": 1,
  //     "Pclass": 3,
  //     "Name": "Masselmani, Mrs. Fatima",
  //     "Sex": "female",
  //     "Age": "null",
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "2649",
  //     "Fare": 7.225,
  //     "Cabin": "null",
  //     "Embarked": "C"
  //   },
  //   {
  //     "PassengerId": 21,
  //     "Survived": 0,
  //     "Pclass": 2,
  //     "Name": "Fynney, Mr. Joseph J",
  //     "Sex": "male",
  //     "Age": 35,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "239865",
  //     "Fare": 26,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 22,
  //     "Survived": 1,
  //     "Pclass": 2,
  //     "Name": "Beesley, Mr. Lawrence",
  //     "Sex": "male",
  //     "Age": 34,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "248698",
  //     "Fare": 13,
  //     "Cabin": "D56",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 23,
  //     "Survived": 1,
  //     "Pclass": 3,
  //     "Name": "McGowan, Miss. Anna \"Annie\"",
  //     "Sex": "female",
  //     "Age": 15,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "330923",
  //     "Fare": 8.0292,
  //     "Cabin": "null",
  //     "Embarked": "Q"
  //   },
  //   {
  //     "PassengerId": 24,
  //     "Survived": 1,
  //     "Pclass": 1,
  //     "Name": "Sloper, Mr. William Thompson",
  //     "Sex": "male",
  //     "Age": 28,
  //     "SibSp": 0,
  //     "Parch": 0,
  //     "Ticket": "113788",
  //     "Fare": 35.5,
  //     "Cabin": "A6",
  //     "Embarked": "S"
  //   },
  //   {
  //     "PassengerId": 25,
  //     "Survived": 0,
  //     "Pclass": 3,
  //     "Name": "Palsson, Miss. Torborg Danira",
  //     "Sex": "female",
  //     "Age": 8,
  //     "SibSp": 3,
  //     "Parch": 1,
  //     "Ticket": "349909",
  //     "Fare": 21.075,
  //     "Cabin": "null",
  //     "Embarked": "S"
  //   }
  // ];

  no_of_Graphs = 0;
  source1_name="";
  source2_name="";
  upload_source2=false;
  panelOpenState = false;
  selectedFile:any;

  actions: Action[] = [
    {value: 'pivot', viewValue: 'Pivot'},
    {value: 'aggregate', viewValue: 'Aggregate'},
    {value: 'groupby', viewValue: 'GroupBy'},
    {value: 'concat', viewValue: 'Concat'},
  ];

  constructor(private http:HttpClient,private sendFileservice:SendFileService){

  }
  addNewGraph(){
    this.no_of_Graphs+=1;
  }

  source1tf(){
    this.source1_name="test1";
    this.upload_source2=true;
  }

  source1(event: any){
    this.selectedFile = event.target.files[0]
    const formData = new FormData();
    formData.append('file',this.selectedFile);
    // this.source1_name="test1";
    // this.upload_source2=true;
    this.sendFileservice.sendfile(formData).subscribe(res => {
      console.log(res)
      this.fileId = res.id
    })
    

  }

  onUpload(){
    this.sendFileservice.getFile(this.fileId,25,1).subscribe(res =>{
      console.log(res)
    })
  }

  source2(){
    this.source2_name="test2";
  }


  ngOnInit(): void {
      
  }
}
