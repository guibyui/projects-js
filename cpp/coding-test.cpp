#include <iostream>

using namespace std;

int main() 
{

string s1 = "it";
string s2 = "make";
string s3 = "easy";

if (s1 > s2)
{
    if (s1 > s3)
        cout << s1 + s3 + s2;
    else
        cout << s3 + s1 + s2;
}
else
{
    if (s2 > s3)
        cout << s2 + s3 + s1;
    else
        cout << s3 + s2 + s1;
}

/*******************************************************/

int a[10] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
int *ptr = a;

ptr++;
ptr++;
ptr++;
cout << *ptr + 1 << endl;

cout << "\n";
cout << "\n";
cout << "\n";

int n = 7;
int m = 1000;

void zigzag(int n, int m)
{
    if (n < m)
    {
        cout << n / 2 << " ";
        if (n % 2 == 0)
            zigzag(n / 2 + 1, m / 2);
        else
            zigzag(n * 2, m / 3);
    }
}

int main()
{

    int n = 7;
    int m = 1000;
    zigzag(n, m);

    return 0;
}

vector<int> testVec(3);
testVec.push_back(1);
testVec.push_back(2);
testVec[1] = 5;
testVec[2] = 4;
testVec.begin();
testVec.end();
testVec.push_back(3);
testVec.push_back(4);
testVec.pop_back();
testVec.begin();
testVec.end();

int x;
ifstream inFile;
inFile.open("Text.txt");

while (inFile >> x)
    ;
{
    cout << x << " ";
}

}