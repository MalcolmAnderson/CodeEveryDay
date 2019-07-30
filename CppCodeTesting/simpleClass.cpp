#include "simpleClass.h"



#include <cstdio>

using namespace std;

class simpleClass
{
	int i = 0;
public:
	void setvalue(const int& value) { i = value; }
	int getvalue() const { return i; }
};