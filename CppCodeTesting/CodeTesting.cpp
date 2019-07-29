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
	RealEstateOutput();


	return 0;
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


