// CodeTesting.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

bool checkPalindrome(string inputString);
string reverseString(string inputString);
void RealEstateOutput();
int main()
{
    cout << "Hello World!\n";
	//string output = checkPalindrome("aaabaaa") ? "is true" : "is false";
	//cout << output;
	zerotwo_01_arrays();


	return 0;
}

void zerotwo_01_arrays() {
	double values[10];						//declare an array values with 10 elements
	double* pValue = values;				//define a pointer to the array
	cout << "value array address: " << values << endl;
	cout << "pValues: " << pValue << endl;

	int numbers[10];
	int* pNumbers = numbers;
	for (int i = 0; i < 10; i++) {
		cout << "numbers address " << i << ": " << pNumbers + i << endl;
	}
}

void RealEstateOutput() {
	string lastName;
	const double commission{ .06 };
	const double listingAgent{ .015 };
	double salesPrice, sellerCost, agentsCommission;

	cout << "Enter homeowner's last name: ";
	cin >> lastName;
	cout << "Enter the sales price for the hous: (no commas or decimal points)";
	cin >> salesPrice;
	sellerCost = commission * salesPrice;
	agentsCommission = listingAgent * salesPrice;
	cout << "\tHome Owner\tPrice of Home\tSeller's Cost\tAgent's Commission\n";
	cout << "\t" << left << setw(16) << lastName << "$" << salesPrice << "\t\t$" << sellerCost << "\t\t$" << agentsCommission << endl;

}

string reverseString(string inputString) {
	string reversed = "";
	for (int i = inputString.length() - 1; i >= 0; i--) {
		reversed += inputString[i];
	}
	return reversed;
}

bool checkPalindrome(string inputString) {
	string reversed = reverseString(inputString);
	for (size_t i = 0; i < inputString.length(); i++) {
		if (inputString[i] != reversed[i]) {
			return false;
		}
	}

	return true;
}


